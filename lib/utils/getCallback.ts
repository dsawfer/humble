import { MetricCallback } from '../types/common';
import { FCP, FID, LCP } from '../callbacks';

export const getCallback = (metric: string): MetricCallback => {
  switch (metric) {
    case 'paint':
      return FCP;
    case 'largest-contentful-paint':
      return LCP;
    case 'first-input':
      return FID;
    default:
      return () => {};
  }
};
