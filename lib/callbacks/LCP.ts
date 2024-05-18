import { MetricCallback } from '../types/common';

export const LCP: MetricCallback = (entries) => {
  entries.forEach((entry) => {
    // @ts-ignore
    console.log(`${entry.entryType}:`, entry.renderTime);
  });
};
