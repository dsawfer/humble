import { MetricCallback } from '../types/common';

export const LT: MetricCallback = (entries) => {
  entries.forEach((entry) => {
    console.log(`${entry.name}:`, entry.startTime);
  });
};
