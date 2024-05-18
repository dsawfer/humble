import { ALL_METRICS } from '../presets';

/**
 * Возвращает все доступные метрики для текущего приложения
 */
export const getSupportedMetrics = (): string[] => {
  const supportedMetrics = PerformanceObserver.supportedEntryTypes || [];

  return ALL_METRICS.filter((metric) => supportedMetrics.includes(metric));
};
