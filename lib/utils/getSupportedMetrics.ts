import { ALL_METRICS } from '../constants';

const EXCLUDED_METRICS = ['resource', 'layout-shift'];

/**
 * Get supported metrics except excluded
 */
export const getSupportedMetrics = () => {
  const supportedMetrics = PerformanceObserver.supportedEntryTypes || [];

  return ALL_METRICS.filter(
    (metric) =>
      supportedMetrics.includes(metric) && !EXCLUDED_METRICS.includes(metric),
  );
};
