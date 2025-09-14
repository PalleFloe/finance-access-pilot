import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

// Simple hash function for IP anonymization
const hashString = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash).toString(16);
};

export const useAnalytics = () => {
  const { user } = useAuth();

  const trackEvent = async (modelName: string, actionType: 'page_visit' | 'online_open' | 'download') => {
    try {
      // Get anonymized IP hash (basic privacy protection)
      const response = await fetch('https://api.ipify.org?format=json');
      const ipData = await response.json();
      const ipHash = hashString(ipData.ip);

      await supabase
        .from('model_analytics')
        .insert({
          model_name: modelName,
          action_type: actionType,
          user_id: user?.id || null,
          ip_hash: ipHash,
          user_agent: navigator.userAgent.substring(0, 200), // Truncate for storage
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