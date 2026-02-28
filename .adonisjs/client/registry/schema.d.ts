/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'health_checks': {
    methods: ["GET","HEAD"]
    pattern: '/health'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/health_checks_controller').default['handle']>>>
    }
  }
  'signup': {
    methods: ["GET","HEAD"]
    pattern: '/id/signup'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'users.create_user': {
    methods: ["POST"]
    pattern: '/id/signup'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/id_validator').idCreateUserValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/id_validator').idCreateUserValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/users_controller').default['createUser']>>>
    }
  }
  'login': {
    methods: ["GET","HEAD"]
    pattern: '/id/login'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'auth.login': {
    methods: ["POST"]
    pattern: '/id/login'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/id_validator').idLoginValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/id_validator').idLoginValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['login']>>>
    }
  }
  'forgot-password': {
    methods: ["GET","HEAD"]
    pattern: '/id/forgot-password'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'auth.forgot_password': {
    methods: ["POST"]
    pattern: '/id/forgot-password'
    types: {
      body: ExtractBody<InferInput<(typeof import('@vinejs/vine').default)['compile']>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('@vinejs/vine').default)['compile']>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['forgotPassword']>>>
    }
  }
  'reset-password': {
    methods: ["GET","HEAD"]
    pattern: '/id/reset-password'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'auth.reset_password': {
    methods: ["POST"]
    pattern: '/id/reset-password'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/id_validator').idResetPasswordValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/id_validator').idResetPasswordValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['resetPassword']>>>
    }
  }
  'logout': {
    methods: ["POST"]
    pattern: '/id/logout'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['logout']>>>
    }
  }
  'profile.onboard': {
    methods: ["GET","HEAD"]
    pattern: '/onboard'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'onboard': {
    methods: ["POST"]
    pattern: '/onboard'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/onboarding_validator').onboardingValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/onboarding_validator').onboardingValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/onboard_controller').default['handle']>>>
    }
  }
  'dashboard': {
    methods: ["GET","HEAD"]
    pattern: '/'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'analysis.index': {
    methods: ["GET","HEAD"]
    pattern: '/analysis'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'analysis.create.show': {
    methods: ["GET","HEAD"]
    pattern: '/analysis/create'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
}
