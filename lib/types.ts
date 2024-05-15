export interface ObserveOptions {
  POCallback: (list: PerformanceObserverEntryList) => void;
  metrics: string[];
}

/**
 * Пресеты для инициализации
 * @param default - CLS, FCP, FID, INP, LCP
 * @param min - CLS, INP, LCP
 * @param max = все доступные метрики
 */
export type Preset = 'default' | 'min' | 'max';

export type metric = {
  name: string;
  value: number;
};
