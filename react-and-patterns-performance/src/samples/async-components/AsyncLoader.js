import lazy from './lazy'

export const AsyncComponent = lazy(() =>
  import('./AsyncComponent').then(module => module.default)
)
