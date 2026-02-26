/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  healthChecks: typeof routes['health_checks']
  signup: typeof routes['signup']
  users: {
    createUser: typeof routes['users.create_user']
  }
  login: typeof routes['login']
  auth: {
    login: typeof routes['auth.login']
    forgotPassword: typeof routes['auth.forgot_password']
    resetPassword: typeof routes['auth.reset_password']
  }
  forgotPassword: typeof routes['forgot-password']
  resetPassword: typeof routes['reset-password']
  logout: typeof routes['logout']
  profile: {
    onboard: typeof routes['profile.onboard']
  }
  onboard: typeof routes['onboard']
  dashboard: typeof routes['dashboard']
}
