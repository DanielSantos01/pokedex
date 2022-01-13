export interface IHttpParams {
  url: string;
  body?: Record<string, unknown>;
  config?: Record<string, unknown>;
}

export type IHttpHelperBodyParams = any;

export interface HttpHelperResponse<T> {
  statusCode: number;
  body: T;
}
