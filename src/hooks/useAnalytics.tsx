import { useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

// Generate a session ID for this browser session
const generateSessionId = () => {
  let sessionId = sessionStorage.getItem('analytics_session_id');
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem('analytics_session_id', sessionId);
  }
  return sessionId;
};

export const useAnalytics = () => {
  const { user } = useAuth();

  const trackEvent = async (
    modelName: string, 
    actionType: 'page_visit' | 'online_open' | 'download',
    eventSubtype?: string,
    durationSeconds?: number
  ) => {
    try {
      await supabase.functions.invoke('track-analytics', {
        body: {
          modelName,
          actionType,
          eventSubtype,
          durationSeconds,
          sessionId: generateSessionId(),
          pageUrl: window.location.href,
          userId: user?.id || null,
        },
      });
    } catch (error) {
      // Silently fail - analytics shouldn't break the user experience
      console.warn('Analytics tracking failed:', error);
    }
  };

  const trackPageVisit = (modelName: string) => {
    trackEvent(modelName, 'page_visit', 'visit');
  };

  const trackPageEnter = (modelName: string) => {
    trackEvent(modelName, 'page_visit', 'enter');
  };

  const trackPageExit = (modelName: string, durationSeconds: number) => {
    trackEvent(modelName, 'page_visit', 'exit', durationSeconds);
  };

  const trackOnlineOpen = (modelName: string) => {
    trackEvent(modelName, 'online_open', 'open');
  };

  const trackDownload = (modelName: string) => {
    trackEvent(modelName, 'download', 'download');
  };

  return {
    trackPageVisit,
    trackPageEnter,
    trackPageExit,
    trackOnlineOpen,
    trackDownload,
  };
};

// Hook for automatic page visit and time tracking
export const usePageVisitTracking = (modelName: string) => {
  const { trackPageEnter, trackPageExit } = useAnalytics();
  const startTimeRef = useRef<number>(Date.now());
  const isVisibleRef = useRef<boolean>(!document.hidden);

  useEffect(() => {
    // Track page enter
    startTimeRef.current = Date.now();
    trackPageEnter(modelName);

    // Handle visibility changes (tab switching, minimizing)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page is no longer visible - track time spent
        if (isVisibleRef.current) {
          const timeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000);
          trackPageExit(modelName, timeSpent);
          isVisibleRef.current = false;
        }
      } else {
        // Page is visible again - restart timer
        startTimeRef.current = Date.now();
        trackPageEnter(modelName);
        isVisibleRef.current = true;
      }
    };

    // Handle page unload/navigation away
    const handleBeforeUnload = () => {
      if (isVisibleRef.current) {
        const timeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000);
        // Use sendBeacon for reliable tracking on page unload
        const data = JSON.stringify({
          modelName,
          actionType: 'page_visit',
          eventSubtype: 'exit',
          durationSeconds: timeSpent,
          sessionId: generateSessionId(),
          pageUrl: window.location.href,
          userId: null, // We can't reliably get user ID in beforeunload
        });
        
        navigator.sendBeacon(
          `https://oqmorhcgnkuxwazyqrle.supabase.co/functions/v1/track-analytics`,
          data
        );
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup
    return () => {
      // Track final time spent when component unmounts
      if (isVisibleRef.current) {
        const timeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000);
        trackPageExit(modelName, timeSpent);
      }
      
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [modelName, trackPageEnter, trackPageExit]);
};