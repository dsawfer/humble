import { getSupportedMetrics } from './getSupportedMetrics';
import { DEFAULT_METRICS, MIN_METRICS } from '../presets';
import { Preset } from '../types/common';

export const getPresetMetrics = (preset: Preset) => {
  switch (preset) {
    case 'default':
      return DEFAULT_METRICS;
    case 'min':
      return MIN_METRICS;
    case 'max':
      return getSupportedMetrics();
  }
};
