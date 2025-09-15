import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BarChart3, TrendingUp, Users, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

interface AnalyticsData {
  model_name: string;
  page_visits: number;
  online_opens: number;
  downloads: number;
  unique_visitors: number;
  total_interactions: number;
  average_time_seconds: number;
  total_time_seconds: number;
  page_type?: 'model' | 'general';
}

interface DailyStats {
  date: string;
  total_events: number;
  total_time_seconds: number;
}

interface GeneralPageData {
  page_path: string;
  page_visits: number;
  unique_visitors: number;
  total_interactions: number;
  average_time_seconds: number;
  total_time_seconds: number;
}

const Analytics = () => {
  const { user } = useAuth();
  const [analytics, setAnalytics] = useState<AnalyticsData[]>([]);
  const [generalPages, setGeneralPages] = useState<GeneralPageData[]>([]);
  const [dailyStats, setDailyStats] = useState<DailyStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState('7d'); // 60m = 60 minutes, 24h = 24 hours, 7d = 7 days
  const [visitorType, setVisitorType] = useState<'unique' | 'total'>('total');
  const [pageType, setPageType] = useState<'all' | 'models'>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (user) {
      fetchAnalytics();
    }
  }, [user, dateRange, visitorType, pageType]);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      
      // Check if user is admin (simplified check)
      const { data: userRoles } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user?.id)
        .single();

      if (!userRoles || userRoles.role !== 'admin') {
        console.warn('Access denied: Not an admin');
        setLoading(false);
        return;
      }

      const timeAgo = new Date();
      if (dateRange.endsWith('m')) {
        // Minutes
        const minutes = parseInt(dateRange);
        timeAgo.setMinutes(timeAgo.getMinutes() - minutes);
      } else if (dateRange.endsWith('h')) {
        // Hours
        const hours = parseInt(dateRange);
        timeAgo.setHours(timeAgo.getHours() - hours);
      } else {
        // Days (default)
        const days = parseInt(dateRange);
        timeAgo.setDate(timeAgo.getDate() - days);
      }

      // Fetch all analytics data
      const { data: allData } = await supabase
        .from('model_analytics')
        .select('model_name, action_type, user_id, ip_hash, event_subtype, duration_seconds')
        .gte('created_at', timeAgo.toISOString());

      if (allData) {
        // Separate model pages from general pages
        const modelData = allData.filter(item => 
          !item.model_name.startsWith('/') && 
          !item.model_name.includes('page:')
        );
        
        const generalData = allData.filter(item => 
          item.model_name.startsWith('/') || 
          item.model_name.includes('page:')
        );

        // Process model analytics
        const modelAggregated: { 
          [key: string]: AnalyticsData & { 
            visitors: Set<string>, 
            durations: number[] 
          } 
        } = {};
        
        modelData.forEach((item) => {
          if (!modelAggregated[item.model_name]) {
            modelAggregated[item.model_name] = {
              model_name: item.model_name,
              page_visits: 0,
              online_opens: 0,
              downloads: 0,
              unique_visitors: 0,
              total_interactions: 0,
              average_time_seconds: 0,
              total_time_seconds: 0,
              page_type: 'model',
              visitors: new Set<string>(),
              durations: [],
            };
          }
          
          const visitorId = item.user_id || item.ip_hash;
          if (visitorId) {
            modelAggregated[item.model_name].visitors.add(visitorId);
          }
          
          // Track time spent from exit events
          if (item.event_subtype === 'exit' && item.duration_seconds) {
            modelAggregated[item.model_name].durations.push(item.duration_seconds);
          }
          
          if (item.action_type === 'page_visit' && (item.event_subtype === 'visit' || item.event_subtype === 'enter')) {
            modelAggregated[item.model_name].page_visits += 1;
          } else if (item.action_type === 'online_open') {
            modelAggregated[item.model_name].online_opens += 1;
          } else if (item.action_type === 'download') {
            modelAggregated[item.model_name].downloads += 1;
          }
          modelAggregated[item.model_name].total_interactions += 1;
        });

        // Process general page analytics
        const generalAggregated: { 
          [key: string]: GeneralPageData & { 
            visitors: Set<string>, 
            durations: number[] 
          } 
        } = {};
        
        generalData.forEach((item) => {
          const pagePath = item.model_name.replace('page:', '');
          if (!generalAggregated[pagePath]) {
            generalAggregated[pagePath] = {
              page_path: pagePath,
              page_visits: 0,
              unique_visitors: 0,
              total_interactions: 0,
              average_time_seconds: 0,
              total_time_seconds: 0,
              visitors: new Set<string>(),
              durations: [],
            };
          }
          
          const visitorId = item.user_id || item.ip_hash;
          if (visitorId) {
            generalAggregated[pagePath].visitors.add(visitorId);
          }
          
          // Track time spent from exit events
          if (item.event_subtype === 'exit' && item.duration_seconds) {
            generalAggregated[pagePath].durations.push(item.duration_seconds);
          }
          
          if (item.action_type === 'page_visit' && (item.event_subtype === 'visit' || item.event_subtype === 'enter')) {
            generalAggregated[pagePath].page_visits += 1;
          }
          generalAggregated[pagePath].total_interactions += 1;
        });

        const processedModelData = Object.values(modelAggregated).map(item => {
          const totalTime = item.durations.reduce((sum, duration) => sum + duration, 0);
          const avgTime = item.durations.length > 0 ? totalTime / item.durations.length : 0;
          
          return {
            model_name: item.model_name,
            page_visits: item.page_visits,
            online_opens: item.online_opens,
            downloads: item.downloads,
            unique_visitors: item.visitors.size,
            total_interactions: item.total_interactions,
            average_time_seconds: Math.round(avgTime),
            total_time_seconds: totalTime,
            page_type: 'model' as const,
          };
        });

        const processedGeneralData = Object.values(generalAggregated).map(item => {
          const totalTime = item.durations.reduce((sum, duration) => sum + duration, 0);
          const avgTime = item.durations.length > 0 ? totalTime / item.durations.length : 0;
          
          return {
            page_path: item.page_path,
            page_visits: item.page_visits,
            unique_visitors: item.visitors.size,
            total_interactions: item.total_interactions,
            average_time_seconds: Math.round(avgTime),
            total_time_seconds: totalTime,
          };
        });

        const sortedModelData = processedModelData.sort((a, b) => 
          b.total_interactions - a.total_interactions
        );
        const sortedGeneralData = processedGeneralData.sort((a, b) => 
          b.total_interactions - a.total_interactions
        );

        setAnalytics(sortedModelData);
        setGeneralPages(sortedGeneralData);
      }

      // Fetch daily stats
      const { data: dailyData } = await supabase
        .from('model_analytics')
        .select('created_at, duration_seconds')
        .gte('created_at', timeAgo.toISOString())
        .order('created_at', { ascending: true });

      if (dailyData) {
        const dailyGroups: { [key: string]: { count: number, totalTime: number } } = {};
        dailyData.forEach((item) => {
          const date = new Date(item.created_at).toISOString().split('T')[0];
          if (!dailyGroups[date]) {
            dailyGroups[date] = { count: 0, totalTime: 0 };
          }
          dailyGroups[date].count += 1;
          if (item.duration_seconds) {
            dailyGroups[date].totalTime += item.duration_seconds;
          }
        });

        const dailyStatsArray = Object.entries(dailyGroups).map(([date, stats]) => ({
          date,
          total_events: stats.count,
          total_time_seconds: stats.totalTime,
        }));
        setDailyStats(dailyStatsArray);
      }
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        <div className="flex items-center justify-center h-96">
          <p className="text-lg text-muted-foreground">Please log in to view analytics.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>Analytics Dashboard - Financial Models</title>
        <meta name="description" content="View usage analytics for financial models and tools." />
      </Helmet>
      
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center">
            <BarChart3 className="w-8 h-8 mr-3 text-primary" />
            Analytics Dashboard
          </h1>
          <p className="text-lg text-muted-foreground">
            Track model usage and engagement metrics
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          {/* Page Type Filter */}
          <div className="flex gap-2">
            <Button 
              variant={pageType === 'all' ? 'default' : 'outline'}
              onClick={() => setPageType('all')}
              size="sm"
            >
              All Pages
            </Button>
            <Button 
              variant={pageType === 'models' ? 'default' : 'outline'}
              onClick={() => setPageType('models')}
              size="sm"
            >
              Model Pages
            </Button>
          </div>

          {/* Date Range Filter */}
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={dateRange === '60m' ? 'default' : 'outline'}
              onClick={() => setDateRange('60m')}
            >
              Last 60 Min
            </Button>
            <Button 
              variant={dateRange === '24h' ? 'default' : 'outline'}
              onClick={() => setDateRange('24h')}
            >
              Last 24 Hours
            </Button>
            <Button 
              variant={dateRange === '7d' ? 'default' : 'outline'}
              onClick={() => setDateRange('7d')}
            >
              Last 7 Days
            </Button>
            <Button 
              variant={dateRange === '30d' ? 'default' : 'outline'}
              onClick={() => setDateRange('30d')}
            >
              Last 30 Days
            </Button>
            <Button 
              variant={dateRange === '90d' ? 'default' : 'outline'}
              onClick={() => setDateRange('90d')}
            >
              Last 90 Days
            </Button>
          </div>
          
          {/* Visitor Type Filter */}
          <div className="flex gap-2 ml-auto">
            <Button 
              variant={visitorType === 'total' ? 'default' : 'outline'}
              onClick={() => setVisitorType('total')}
              size="sm"
            >
              Total Visitors
            </Button>
            <Button 
              variant={visitorType === 'unique' ? 'default' : 'outline'}
              onClick={() => setVisitorType('unique')}
              size="sm"
            >
              Unique Visitors
            </Button>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <p className="text-lg text-muted-foreground">Loading analytics...</p>
          </div>
        ) : (
          <>
            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {pageType === 'all' ? 'Total Pages' : 'Total Models'}
                    </p>
                    <p className="text-2xl font-bold">
                      {pageType === 'all' ? analytics.length + generalPages.length : analytics.length}
                    </p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {visitorType === 'unique' ? 'Unique Visitors' : 'Total Page Visits'}
                    </p>
                    <p className="text-2xl font-bold">
                      {pageType === 'all' 
                        ? (visitorType === 'unique' 
                          ? analytics.reduce((sum, item) => sum + item.unique_visitors, 0) + 
                            generalPages.reduce((sum, item) => sum + item.unique_visitors, 0)
                          : analytics.reduce((sum, item) => sum + item.page_visits, 0) + 
                            generalPages.reduce((sum, item) => sum + item.page_visits, 0))
                        : (visitorType === 'unique' 
                          ? analytics.reduce((sum, item) => sum + item.unique_visitors, 0)
                          : analytics.reduce((sum, item) => sum + item.page_visits, 0))
                      }
                    </p>
                  </div>
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Online Opens</p>
                    <p className="text-2xl font-bold">
                      {analytics.reduce((sum, item) => sum + item.online_opens, 0)}
                    </p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Downloads</p>
                    <p className="text-2xl font-bold">
                      {analytics.reduce((sum, item) => sum + item.downloads, 0)}
                    </p>
                  </div>
                  <Download className="w-8 h-8 text-purple-600" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Avg Time (mins)</p>
                    <p className="text-2xl font-bold">
                      {(() => {
                        const allPages = pageType === 'all' ? [...analytics, ...generalPages] : analytics;
                        const totalTime = allPages.reduce((sum, item) => sum + item.total_time_seconds, 0);
                        const totalVisits = allPages.reduce((sum, item) => sum + item.page_visits, 0);
                        const avgSeconds = totalVisits > 0 ? totalTime / totalVisits : 0;
                        return Math.round(avgSeconds / 60 * 10) / 10;
                      })()}
                    </p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
              </Card>
            </div>

            {/* Analytics Table */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">
                {pageType === 'all' ? 'Page Performance' : 'Model Performance'}
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">
                        {pageType === 'all' ? 'Page/Model Name' : 'Model Name'}
                      </th>
                      <th className="text-center py-3 px-2">
                        {visitorType === 'unique' ? 'Unique Visitors' : 'Page Visits'}
                      </th>
                      {(pageType === 'all' || pageType === 'models') && 
                        <>
                          <th className="text-center py-3 px-2">Online Opens</th>
                          <th className="text-center py-3 px-2">Downloads</th>
                          <th className="text-center py-3 px-2">Avg Time</th>
                        </>
                      }
                      {pageType === 'all' && (
                        <th className="text-center py-3 px-2">Avg Time</th>
                      )}
                      <th className="text-center py-3 px-2">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Model Pages */}
                    {(pageType === 'all' || pageType === 'models') && 
                      analytics.map((item) => (
                        <tr key={`model-${item.model_name}`} className="border-b hover:bg-muted/50">
                          <td className="py-3 px-2 font-medium">
                            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">
                              MODEL
                            </span>
                            {item.model_name}
                          </td>
                          <td className="py-3 px-2 text-center">
                            {visitorType === 'unique' ? item.unique_visitors : item.page_visits}
                          </td>
                          <td className="py-3 px-2 text-center">{item.online_opens}</td>
                          <td className="py-3 px-2 text-center">{item.downloads}</td>
                          <td className="py-3 px-2 text-center">
                            {item.average_time_seconds > 0 ? `${Math.round(item.average_time_seconds / 60 * 10) / 10}m` : '-'}
                          </td>
                          <td className="py-3 px-2 text-center font-semibold">
                            {item.total_interactions}
                          </td>
                        </tr>
                      ))
                    }
                    
                    {/* General Pages */}
                    {pageType === 'all' && 
                      generalPages.map((item) => (
                        <tr key={`page-${item.page_path}`} className="border-b hover:bg-muted/50">
                          <td className="py-3 px-2 font-medium">
                            <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-2">
                              PAGE
                            </span>
                            {item.page_path}
                          </td>
                          <td className="py-3 px-2 text-center">
                            {visitorType === 'unique' ? item.unique_visitors : item.page_visits}
                          </td>
                          <td className="py-3 px-2 text-center text-muted-foreground">-</td>
                          <td className="py-3 px-2 text-center text-muted-foreground">-</td>
                          <td className="py-3 px-2 text-center">
                            {item.average_time_seconds > 0 ? `${Math.round(item.average_time_seconds / 60 * 10) / 10}m` : '-'}
                          </td>
                          <td className="py-3 px-2 text-center font-semibold">
                            {item.total_interactions}
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default Analytics;