import {IHttpClient} from '../../adapters/HttpClient';
import {IHttpHelper} from '../../data/usecases/IHttpHelper';
import {IHttpHelperBodyParams, IHttpParams} from '../../data/protocols';

import {HttpResponse} from '../interfaces';

class HttpHelper implements IHttpHelper {
  httpClient: IHttpClient;

  constructor(httpClient: IHttpClient) {
    this.httpClient = httpClient;
    this.post = this.post.bind(this);
    this.get = this.get.bind(this);
    this.patch = this.patch.bind(this);
    this.delete = this.delete.bind(this);
  }

  async post<T>(createParams: IHttpParams): Promise<HttpResponse<T>> {
    const {body} = createParams;
    const newBody = this.parse(body);
    const response: HttpResponse<T> = await this.httpClient.post<T>({
      ...createParams,
      body: newBody,
    });
    return response;
  }

  async get<T>(readParams: IHttpParams): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await this.httpClient.get<T>(readParams);
    return response;
  }

  async patch<T>(updateParams: IHttpParams): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await this.httpClient.patch<T>(
      updateParams,
    );
    return response;
  }

  async delete<T>(deleteParams: IHttpParams): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await this.httpClient.delete<T>(
      deleteParams,
    );
    return response;
  }

  private parse(valueToParse: IHttpHelperBodyParams): URLSearchParams {
    const urlencoded: URLSearchParams = new URLSearchParams();
    const objectKeys: string[] = Object.keys(valueToParse);
    objectKeys.forEach((key: string) => {
      urlencoded.append(key, valueToParse[key]);
    });
    return urlencoded;
  }
}

export default HttpHelper;
