import { MetricCallback } from '../types/common';
import { metricApi } from '../services/api/Metric.api';

export const FCP: MetricCallback = (entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    console.log(`${entry.name}:`, entry.startTime);
    metricApi.send({ name: entry.name, value: entry.startTime });
  });
};
