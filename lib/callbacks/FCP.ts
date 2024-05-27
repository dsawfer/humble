import { MetricCallback } from '../types/common';
import { metricsApi } from '../services/api/Metric.api';

export const FCP: MetricCallback = (entries) => {
  entries.forEach((entry) => {
    metricsApi.send({ name: entry.name, value: entry.startTime });
  });
};
