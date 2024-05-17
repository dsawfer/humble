import { observe } from './observe';
import { getSupportedMetrics } from './utils/getSupportedMetrics';
import { getMetrics } from './utils/getMetrics';
import { DEFAULT_CONFIG } from './constants';
import { Config } from './types/common';

console.log('Supported metrics:', getSupportedMetrics());

const callback = (list: PerformanceObserverEntryList) => {
  const entries = list.getEntries();
  for (const entry of entries) {
    console.log(entry);
  }
};

/**
 * Метод для инициализации сборщика метрик
 * @param config - конфиг с настройками библиотеки
 */
export const init = (config: Config = DEFAULT_CONFIG) => {
  observe({
    POCallback: callback,
    metrics: getMetrics(config.preset),
  });
};
