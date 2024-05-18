export const ALL_METRICS = [
  'element',
  // 'event',
  'first-input',
  'largest-contentful-paint',
  // 'layout-shift',
  'longtask',
  // 'mark',
  // 'measure',
  'navigation',
  'paint',
  // 'resource',
  // 'taskattribution',
  'visibility-state',
];

// FP, FCP, FID, LCP, LT
export const DEFAULT_METRICS = [
  'paint',
  'first-input',
  'largest-contentful-paint',
  'longtask',
];

// FP, FCP, LCP
export const MIN_METRICS = ['paint', 'largest-contentful-paint'];
