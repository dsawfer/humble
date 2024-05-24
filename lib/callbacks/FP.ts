import { MetricCallback } from '../types/common';
import { metricApi } from '../services/api/Metric.api';

export const FP: MetricCallback = (entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    // @ts-ignore
    console.log(`${entry.name}:`, entry.startTime);
    // metricApi.send({ name: entry.name, value: entry.startTime });
  });
};
