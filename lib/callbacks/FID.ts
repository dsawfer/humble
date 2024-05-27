import { MetricCallback } from '../types/common';
import { metricsApi } from '../services/api/Metric.api';

export const FID: MetricCallback = (entries) => {
  entries.forEach((entry) => {
    metricsApi.send({
      name: entry.name,
      // @ts-ignore
      value: entry.processingEnd - entry.startTime,
    });
  });
};
