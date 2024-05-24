import { MetricCallback } from '../types/common';
import { FCP, FP, LCP, LT } from '../callbacks';

export const getCallback = (metric: string): MetricCallback => {
  switch (metric) {
    case 'paint':
      return FCP;
    case 'largest-contentful-paint':
      return LCP;
    case 'first-input':
      return FP;
    case 'longtask':
      return LT;
    default:
      return () => {};
  }
};
