import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

export const useAnalytics = () => {
  const { user } = useAuth();

  const trackEvent = async (modelName: string, actionType: 'page_visit' | 'online_open' | 'download') => {
    try {
      await supabase.functions.invoke('track-analytics', {
        body: {
          modelName,
          actionType,
          userId: user?.id || null,
        },
      });
    } catch (error) {
      // Silently fail - analytics shouldn't break the user experience
      console.warn('Analytics tracking failed:', error);
    }
  };

  const trackPageVisit = (modelName: string) => {
    trackEvent(modelName, 'page_visit');
  };

  const trackOnlineOpen = (modelName: string) => {
    trackEvent(modelName, 'online_open');
  };

  const trackDownload = (modelName: string) => {
    trackEvent(modelName, 'download');
  };

  return {
    trackPageVisit,
    trackOnlineOpen,
    trackDownload,
  };
};

// Hook for automatic page visit tracking
export const usePageVisitTracking = (modelName: string) => {
  const { trackPageVisit } = useAnalytics();

  useEffect(() => {
    trackPageVisit(modelName);
  }, [modelName, trackPageVisit]);
};