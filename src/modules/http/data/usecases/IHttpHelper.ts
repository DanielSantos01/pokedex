/* eslint-disable no-unused-vars */
import {HttpHelperResponse, IHttpParams} from '../protocols';

export interface IHttpHelper {
  post: <T>(postParams: IHttpParams) => Promise<HttpHelperResponse<T>>;
  get: <T>(hetParams: IHttpParams) => Promise<HttpHelperResponse<T>>;
  patch: <T>(patchParams: IHttpParams) => Promise<HttpHelperResponse<T>>;
  delete: <T>(deleteParams: IHttpParams) => Promise<HttpHelperResponse<T>>;
}
