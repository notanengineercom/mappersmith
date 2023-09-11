import type { GlobalConfigs, ManifestOptions, ResourceTypeConstraint } from './manifest'
export type { GlobalConfigs, ManifestOptions, ResourceTypeConstraint }
export type { Request, RequestContext } from './request'
export {
  Primitive,
  Hash,
  Headers,
  Body,
  Params as Parameters,
  Auth as Authorization,
  NestedParam,
  NestedParamArray,
  RequestParams,
  ParameterEncoderFn,
} from './types'
export type { Gateway } from './gateway'
export type { XHR as XhrGateway } from './gateway/xhr'
export type { HTTP as HTTPGateway } from './gateway/http'
export type { Fetch as FetchGateway } from './gateway/fetch'
export type { Mock as MockGateway } from './gateway/mock'
export type {
  HTTPRequestParams,
  HTTPGatewayConfiguration,
  GatewayConfiguration,
} from './gateway/types'
export { Response, ParsedJSON } from './response'
export type {
  AbortFn,
  Context,
  Middleware,
  MiddlewareDescriptor,
  MiddlewareParams,
  RenewFn,
  RequestGetter,
  ResponseGetter,
} from './middleware/index'
export type { AsyncFunction, AsyncFunctions, Client } from './client-builder'
/**
 * @deprecated, use ManifestOptions instead
 */
export type Options<Resources extends ResourceTypeConstraint> = ManifestOptions<Resources>

/**
 * @deprecated, use GlobalConfigs instead
 */
export type Configuration = GlobalConfigs

export { default, version, configs, setContext } from './mappersmith'
