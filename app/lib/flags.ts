export const flags = {
  dashboard: process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_FEATURE_DASHBOARD === 'true',
}; 