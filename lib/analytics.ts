declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const initGA = () => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
}

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// Track waitlist signups
export const trackWaitlistSignup = (email: string, role?: string) => {
  trackEvent('waitlist_signup', 'engagement', role || 'unknown');
  
}

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
}

export const trackVideoPlay = (videoId: string) => {
  trackEvent('video_play', 'engagement', videoId);
}

export const trackVideoComplete = (videoId: string) => {
  trackEvent('video_complete', 'engagement', videoId);
}