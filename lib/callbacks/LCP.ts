import { MetricCallback } from '../types/common';
import { metricApi } from '../services/api/Metric.api';

export const LCP: MetricCallback = (entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    // @ts-ignore
    console.log(`${entry.entryType}:`, entry.renderTime);
    // @ts-ignore
    // metricApi.send({ name: entry.name, value: entry.renderTime });
  });
};
