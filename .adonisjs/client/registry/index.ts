/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'health_checks': {
    methods: ["GET","HEAD"],
    pattern: '/health',
    tokens: [{"old":"/health","type":0,"val":"health","end":""}],
    types: placeholder as Registry['health_checks']['types'],
  },
  'signup': {
    methods: ["GET","HEAD"],
    pattern: '/id/signup',
    tokens: [{"old":"/id/signup","type":0,"val":"id","end":""},{"old":"/id/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['signup']['types'],
  },
  'users.create_user': {
    methods: ["POST"],
    pattern: '/id/signup',
    tokens: [{"old":"/id/signup","type":0,"val":"id","end":""},{"old":"/id/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['users.create_user']['types'],
  },
  'login': {
    methods: ["GET","HEAD"],
    pattern: '/id/login',
    tokens: [{"old":"/id/login","type":0,"val":"id","end":""},{"old":"/id/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['login']['types'],
  },
  'auth.login': {
    methods: ["POST"],
    pattern: '/id/login',
    tokens: [{"old":"/id/login","type":0,"val":"id","end":""},{"old":"/id/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.login']['types'],
  },
  'forgot-password': {
    methods: ["GET","HEAD"],
    pattern: '/id/forgot-password',
    tokens: [{"old":"/id/forgot-password","type":0,"val":"id","end":""},{"old":"/id/forgot-password","type":0,"val":"forgot-password","end":""}],
    types: placeholder as Registry['forgot-password']['types'],
  },
  'auth.forgot_password': {
    methods: ["POST"],
    pattern: '/id/forgot-password',
    tokens: [{"old":"/id/forgot-password","type":0,"val":"id","end":""},{"old":"/id/forgot-password","type":0,"val":"forgot-password","end":""}],
    types: placeholder as Registry['auth.forgot_password']['types'],
  },
  'reset-password': {
    methods: ["GET","HEAD"],
    pattern: '/id/reset-password',
    tokens: [{"old":"/id/reset-password","type":0,"val":"id","end":""},{"old":"/id/reset-password","type":0,"val":"reset-password","end":""}],
    types: placeholder as Registry['reset-password']['types'],
  },
  'auth.reset_password': {
    methods: ["POST"],
    pattern: '/id/reset-password',
    tokens: [{"old":"/id/reset-password","type":0,"val":"id","end":""},{"old":"/id/reset-password","type":0,"val":"reset-password","end":""}],
    types: placeholder as Registry['auth.reset_password']['types'],
  },
  'logout': {
    methods: ["POST"],
    pattern: '/id/logout',
    tokens: [{"old":"/id/logout","type":0,"val":"id","end":""},{"old":"/id/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['logout']['types'],
  },
  'profile.onboard': {
    methods: ["GET","HEAD"],
    pattern: '/onboard',
    tokens: [{"old":"/onboard","type":0,"val":"onboard","end":""}],
    types: placeholder as Registry['profile.onboard']['types'],
  },
  'onboard': {
    methods: ["POST"],
    pattern: '/onboard',
    tokens: [{"old":"/onboard","type":0,"val":"onboard","end":""}],
    types: placeholder as Registry['onboard']['types'],
  },
  'dashboard': {
    methods: ["GET","HEAD"],
    pattern: '/',
    tokens: [{"old":"/","type":0,"val":"/","end":""}],
    types: placeholder as Registry['dashboard']['types'],
  },
  'analysis.index': {
    methods: ["GET","HEAD"],
    pattern: '/analysis',
    tokens: [{"old":"/analysis","type":0,"val":"analysis","end":""}],
    types: placeholder as Registry['analysis.index']['types'],
  },
  'analysis.create.show': {
    methods: ["GET","HEAD"],
    pattern: '/analysis/create',
    tokens: [{"old":"/analysis/create","type":0,"val":"analysis","end":""},{"old":"/analysis/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['analysis.create.show']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
