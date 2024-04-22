import { ObserveOptions } from './types';
import { getSupportedMetrics } from './utils/getSupportedMetrics';

console.log(PerformanceObserver.supportedEntryTypes);

export const observe = (options: ObserveOptions) => {
  const observer = new PerformanceObserver((list) => {
    options.POCallback(list);
  });

  observer.observe({
    buffered: true,
    //https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/entryType
    entryTypes: getSupportedMetrics(),
  });

  return observer;
};
