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
  total_interactions: number;
}

interface DailyStats {
  date: string;
  total_events: number;
}

const Analytics = () => {
  const { user } = useAuth();
  const [analytics, setAnalytics] = useState<AnalyticsData[]>([]);
  const [dailyStats, setDailyStats] = useState<DailyStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState('7'); // days

  useEffect(() => {
    window.scrollTo(0, 0);
    if (user) {
      fetchAnalytics();
    }
  }, [user, dateRange]);

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

      const daysAgo = new Date();
      daysAgo.setDate(daysAgo.getDate() - parseInt(dateRange));

      // Fetch model analytics aggregated by model name
      const { data: modelData } = await supabase
        .from('model_analytics')
        .select('model_name, action_type')
        .gte('created_at', daysAgo.toISOString());

      if (modelData) {
        const aggregated: { [key: string]: AnalyticsData } = {};
        
        modelData.forEach((item) => {
          if (!aggregated[item.model_name]) {
            aggregated[item.model_name] = {
              model_name: item.model_name,
              page_visits: 0,
              online_opens: 0,
              downloads: 0,
              total_interactions: 0,
            };
          }
          
          if (item.action_type === 'page_visit') {
            aggregated[item.model_name].page_visits += 1;
          } else if (item.action_type === 'online_open') {
            aggregated[item.model_name].online_opens += 1;
          } else if (item.action_type === 'download') {
            aggregated[item.model_name].downloads += 1;
          }
          aggregated[item.model_name].total_interactions += 1;
        });

        const sortedData = Object.values(aggregated).sort((a, b) => 
          b.total_interactions - a.total_interactions
        );
        setAnalytics(sortedData);
      }

      // Fetch daily stats
      const { data: dailyData } = await supabase
        .from('model_analytics')
        .select('created_at')
        .gte('created_at', daysAgo.toISOString())
        .order('created_at', { ascending: true });

      if (dailyData) {
        const dailyGroups: { [key: string]: number } = {};
        dailyData.forEach((item) => {
          const date = new Date(item.created_at).toISOString().split('T')[0];
          dailyGroups[date] = (dailyGroups[date] || 0) + 1;
        });

        const dailyStatsArray = Object.entries(dailyGroups).map(([date, count]) => ({
          date,
          total_events: count,
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

        <div className="flex gap-4 mb-6">
          <Button 
            variant={dateRange === '7' ? 'default' : 'outline'}
            onClick={() => setDateRange('7')}
          >
            Last 7 Days
          </Button>
          <Button 
            variant={dateRange === '30' ? 'default' : 'outline'}
            onClick={() => setDateRange('30')}
          >
            Last 30 Days
          </Button>
          <Button 
            variant={dateRange === '90' ? 'default' : 'outline'}
            onClick={() => setDateRange('90')}
          >
            Last 90 Days
          </Button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <p className="text-lg text-muted-foreground">Loading analytics...</p>
          </div>
        ) : (
          <>
            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Models</p>
                    <p className="text-2xl font-bold">{analytics.length}</p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Page Visits</p>
                    <p className="text-2xl font-bold">
                      {analytics.reduce((sum, item) => sum + item.page_visits, 0)}
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
            </div>

            {/* Model Analytics Table */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Model Performance</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Model Name</th>
                      <th className="text-center py-3 px-2">Page Visits</th>
                      <th className="text-center py-3 px-2">Online Opens</th>
                      <th className="text-center py-3 px-2">Downloads</th>
                      <th className="text-center py-3 px-2">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {analytics.map((item) => (
                      <tr key={item.model_name} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-2 font-medium">{item.model_name}</td>
                        <td className="py-3 px-2 text-center">{item.page_visits}</td>
                        <td className="py-3 px-2 text-center">{item.online_opens}</td>
                        <td className="py-3 px-2 text-center">{item.downloads}</td>
                        <td className="py-3 px-2 text-center font-semibold">
                          {item.total_interactions}
                        </td>
                      </tr>
                    ))}
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