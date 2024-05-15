import { Preset } from '../types';
import { DEFAULT_METRICS, MIN_METRICS } from '../constants';
import { getSupportedMetrics } from './getSupportedMetrics';

export const getMetrics = (preset: Preset) => {
  switch (preset) {
    case 'default':
      return DEFAULT_METRICS;
    case 'min':
      return MIN_METRICS;
    case 'max':
      return getSupportedMetrics();
  }
};
