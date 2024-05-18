import { MetricCallback } from '../types/common';

export const FP: MetricCallback = (entries) => {
  entries.forEach((entry) => {
    // @ts-ignore
    console.log(`${entry.name}:`, entry.processingStart - entry.startTime);
  });
};
