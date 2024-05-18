import { MetricCallback } from '../types/common';
import { FCP, FP, LCP, LT } from '../callbacks';

export const getCallback = (metric: string): MetricCallback => {
  switch (metric) {
    case 'paint':
      return FP;
    case 'largest-contentful-paint':
      return LCP;
    case 'first-input':
      return FCP;
    case 'longtask':
      return LT;
    default:
      return () => {};
  }
};
