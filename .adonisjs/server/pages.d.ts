import '@adonisjs/inertia/types'

import type React from 'react'
import type { Prettify } from '@adonisjs/core/types/common'

type ExtractProps<T> =
  T extends React.FC<infer Props>
    ? Prettify<Omit<Props, 'children'>>
    : T extends React.Component<infer Props>
      ? Prettify<Omit<Props, 'children'>>
      : never

declare module '@adonisjs/inertia/types' {
  export interface InertiaPages {
    'analysis/create': ExtractProps<(typeof import('../../inertia/pages/analysis/create.tsx'))['default']>
    'analysis/index': ExtractProps<(typeof import('../../inertia/pages/analysis/index.tsx'))['default']>
    'errors/not_found': ExtractProps<(typeof import('../../inertia/pages/errors/not_found.tsx'))['default']>
    'errors/server_error': ExtractProps<(typeof import('../../inertia/pages/errors/server_error.tsx'))['default']>
    'home': ExtractProps<(typeof import('../../inertia/pages/home.tsx'))['default']>
    'id/forgot-password': ExtractProps<(typeof import('../../inertia/pages/id/forgot-password.tsx'))['default']>
    'id/login': ExtractProps<(typeof import('../../inertia/pages/id/login.tsx'))['default']>
    'id/reset-password': ExtractProps<(typeof import('../../inertia/pages/id/reset-password.tsx'))['default']>
    'id/signup': ExtractProps<(typeof import('../../inertia/pages/id/signup.tsx'))['default']>
    'onboard/index': ExtractProps<(typeof import('../../inertia/pages/onboard/index.tsx'))['default']>
  }
}
