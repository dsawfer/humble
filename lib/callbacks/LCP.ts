import { MetricCallback } from '../types/common';
import { metricsApi } from '../services/api/Metric.api';

export const LCP: MetricCallback = (entries) => {
  entries.forEach((entry) => {
    // @ts-ignore
    metricsApi.send({ name: entry.entryType, value: entry.renderTime });
  });
};
