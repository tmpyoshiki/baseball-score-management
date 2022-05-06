import { injectable } from 'inversify';
import axios, { AxiosError, AxiosRequestHeaders } from 'axios';
import { Result, Failure, Success } from '../type/Results';
import BMSAPILibrary from '../interface/BMSAPILibrary';

// TODO configに記載するように修正する
const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/v1',
});

/**
 * エラーレスポンス
 */
interface ErrorResponse {
  /**
   * HTTPステータス
   */
  readonly status?: number;
  /**
   * 設定したいエラーメッセージ
   */
  readonly message?: string;
}

@injectable()
export default class BMSAPILibraryImpl implements BMSAPILibrary {
  public async getTeams(
    start: number,
    resultsNum: number
  ): Promise<TeamListResponse | Error> {
    const requestPath = '/teams';
    const params = { start, results: resultsNum };
    return await this.getClient<TeamListResponse>({ requestPath, params });
  }

  /**
   * getリクエストを行うメソッド
   * @param requestPath リクエスト先のパス
   * @param params クエリパラメータ
   * @param headers リクエストヘッダー
   * @returns
   */
  private async getClient<T>({
    requestPath,
    params,
    headers,
  }: {
    requestPath: string;
    params?: object;
    headers?: AxiosRequestHeaders;
  }): Promise<T | Error> {
    const response = await axiosClient
      .get<T>(requestPath, {
        params,
        headers,
      })
      .then(
        (response): Result<T, ErrorResponse> =>
          response.status >= 400
            ? new Failure({ status: response.status })
            : new Success(response.data)
      )
      .catch(
        (error: AxiosError): Failure<T, ErrorResponse> =>
          new Failure({ status: error.response.status, message: error.message })
      );
    if (response.isFailure()) {
      return this.errorHandler(response.value);
    }
    return response.value;
  }

  /**
   * エラーハンドリング用のメソッド
   * @param param {@link ErrorResponse}
   * @returns
   */
  private errorHandler({ status, message }: ErrorResponse): Error {
    switch (status) {
      case 400:
        return new Error(`${message ?? 'Invalid Param Error.'}`);
      case 401:
        return new Error(`${message ?? 'Unauthorized Error.'}`);
      case 404:
        return new Error(`${message ?? 'Not Found Error.'}`);
      default:
        return new Error(`${message ?? 'Unhandle Error.'}`);
    }
  }
}
