export type MetricCallback = (entries: PerformanceEntryList) => void;

export interface ObserveOptions {
  metric: string;
  POCallback: (list: PerformanceObserverEntryList) => void;
}

// interface PerformanceEntryMap {
//   event: PerformanceEventTiming[];
//   'first-input': PerformanceEventTiming[];
//   'layout-shift': LayoutShift[];
//   'largest-contentful-paint': LargestContentfulPaint[];
//   'long-animation-frame': PerformanceLongAnimationFrameTiming[];
//   paint: PerformancePaintTiming[];
//   navigation: PerformanceNavigationTiming[];
//   resource: PerformanceResourceTiming[];
// }

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

export interface Config {
  preset: Preset;
  endpoint: string;
}
