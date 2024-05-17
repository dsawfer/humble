import { ALL_METRICS } from '../presets';

const EXCLUDED_METRICS = ['resource', 'layout-shift'];

/**
 * Возвращает все доступные метрики для текущего приложения
 */
export const getSupportedMetrics = () => {
  const supportedMetrics = PerformanceObserver.supportedEntryTypes || [];

  return ALL_METRICS.filter(
    (metric) =>
      supportedMetrics.includes(metric) && !EXCLUDED_METRICS.includes(metric),
  );
};
