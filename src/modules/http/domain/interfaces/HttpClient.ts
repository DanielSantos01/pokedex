export interface IHttpParams {
  url: string;
  body?: Record<string, unknown>;
  config?: Record<string, unknown>;
}

export interface HttpResponse<T> {
  statusCode: number;
  body: T;
}

export interface HeaderModel {
  validateStatus: () => boolean;
  timeout?: number;
  headers?: Record<string, unknown>;
}
