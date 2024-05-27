export type MetricCallback = (entries: PerformanceEntryList) => void;

export interface ObserveOptions {
  metric: string;
  POCallback: (list: PerformanceObserverEntryList) => void;
}

/**
 * Пресеты для инициализации
 * @param default - CLS, FCP, FID, INP, LCP
 * @param min - CLS, INP, LCP
 * @param max = все доступные метрики
 */
export type Preset = 'default' | 'min' | 'max';

export interface Metric {
  name: string;
  value: number;
}

export interface Config {
  preset: Preset;
  endpoint: string;
}

export interface ApiResponse {
  result: any;
  success: boolean;
}
