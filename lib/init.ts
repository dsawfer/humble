import { observe } from './observe';
import { getSupportedMetrics } from './utils/getSupportedMetrics';
import { Preset } from './types';
import { getMetrics } from './utils/getMetrics';

console.log('Supported metrics:', getSupportedMetrics());

const callback = (list: PerformanceObserverEntryList) => {
  const entries = list.getEntries();
  for (const entry of entries) {
    console.log(entry);
  }
};

/**
 * Метод для инициализации сборщика метрик
 * @param preset - определяет список собираемых метрик, по умолчанию включен минимальный список
 */
export const init = (preset: Preset = 'min') => {
  observe({
    POCallback: callback,
    metrics: getMetrics(preset),
  });
};
