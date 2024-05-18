import { observe } from './observe';
import { getSupportedMetrics } from './utils/getSupportedMetrics';
import { getPresetMetrics } from './utils/getPresetMetrics';
import { DEFAULT_CONFIG } from './constants';
import { Config } from './types/common';
import { getCallback } from './utils/getCallback';

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
  const supportedMetrics = getSupportedMetrics();
  const presetMetrics = getPresetMetrics(config.preset);

  const metrics = presetMetrics.filter((item) =>
    supportedMetrics.includes(item),
  );

  console.log('Supported metrics:', supportedMetrics);
  console.log('metrics:', metrics);

  for (const metric of metrics) {
    observe({
      POCallback: (list) => {
        getCallback(metric)(list.getEntries());
      },
      metric: metric,
    });
  }
};
