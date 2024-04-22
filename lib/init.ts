import { observe } from './observe';
import { getSupportedMetrics } from './utils/getSupportedMetrics';

console.log('Supported metrics:', getSupportedMetrics());

const callback = (list: PerformanceObserverEntryList) => {
  const entries = list.getEntries();
  for (const entry of entries) {
    console.log(entry);
  }
};

export const init = () => {
  observe({
    POCallback: callback,
  });
};
