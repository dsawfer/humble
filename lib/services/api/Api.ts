import { ApiMethodConfig, ApiRequestConfig } from './Api.types';

/**
 * Базовый класс для API сервисов, предоставляющий готовые GET, POST, DELETE запросы
 */
export class ApiService {
  protected async get<R>(config: ApiMethodConfig) {
    return this.makeRequest<R>({ ...config, method: 'get' });
  }

  protected async post<R>(config: ApiMethodConfig) {
    return this.makeRequest<R>({ ...config, method: 'post' });
  }

  protected async delete<R>(config: ApiMethodConfig) {
    return this.makeRequest<R>({ ...config, method: 'delete' });
  }

  private async makeRequest<R>(config: ApiRequestConfig): Promise<R> {
    try {
      const { method, url, data } = config;

      const response = await fetch(url, {
        method,
        body: data ? JSON.stringify(data) : null,
        credentials: 'same-origin',
      });

      return (await response.json()) as Promise<R>;
    } catch (error) {
      console.warn('FETCH ERROR:', error);
      return {} as R;
    }
  }
}
