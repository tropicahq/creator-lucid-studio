import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'health_checks': { paramsTuple?: []; params?: {} }
    'signup': { paramsTuple?: []; params?: {} }
    'users.create_user': { paramsTuple?: []; params?: {} }
    'login': { paramsTuple?: []; params?: {} }
    'auth.login': { paramsTuple?: []; params?: {} }
    'forgot-password': { paramsTuple?: []; params?: {} }
    'auth.forgot_password': { paramsTuple?: []; params?: {} }
    'reset-password': { paramsTuple?: []; params?: {} }
    'auth.reset_password': { paramsTuple?: []; params?: {} }
    'logout': { paramsTuple?: []; params?: {} }
    'profile.onboard': { paramsTuple?: []; params?: {} }
    'onboard': { paramsTuple?: []; params?: {} }
    'dashboard': { paramsTuple?: []; params?: {} }
    'analysis.index': { paramsTuple?: []; params?: {} }
    'analysis.create.show': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'health_checks': { paramsTuple?: []; params?: {} }
    'signup': { paramsTuple?: []; params?: {} }
    'login': { paramsTuple?: []; params?: {} }
    'forgot-password': { paramsTuple?: []; params?: {} }
    'reset-password': { paramsTuple?: []; params?: {} }
    'profile.onboard': { paramsTuple?: []; params?: {} }
    'dashboard': { paramsTuple?: []; params?: {} }
    'analysis.index': { paramsTuple?: []; params?: {} }
    'analysis.create.show': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'health_checks': { paramsTuple?: []; params?: {} }
    'signup': { paramsTuple?: []; params?: {} }
    'login': { paramsTuple?: []; params?: {} }
    'forgot-password': { paramsTuple?: []; params?: {} }
    'reset-password': { paramsTuple?: []; params?: {} }
    'profile.onboard': { paramsTuple?: []; params?: {} }
    'dashboard': { paramsTuple?: []; params?: {} }
    'analysis.index': { paramsTuple?: []; params?: {} }
    'analysis.create.show': { paramsTuple?: []; params?: {} }
  }
  OPTIONS: {
  }
  POST: {
    'users.create_user': { paramsTuple?: []; params?: {} }
    'auth.login': { paramsTuple?: []; params?: {} }
    'auth.forgot_password': { paramsTuple?: []; params?: {} }
    'auth.reset_password': { paramsTuple?: []; params?: {} }
    'logout': { paramsTuple?: []; params?: {} }
    'onboard': { paramsTuple?: []; params?: {} }
  }
  PUT: {
  }
  PATCH: {
  }
  DELETE: {
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}