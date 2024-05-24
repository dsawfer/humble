import { ApiMethodConfig, ApiRequestConfig } from './Api.types';
import { ApiResponse } from '../../types/common';

/**
 * Базовый класс для API сервисов, предоставляющий готовые GET, POST, DELETE запросы
 */
export class ApiService {
  protected async get(config: ApiMethodConfig) {
    return this.makeRequest({ ...config, method: 'get' });
  }

  protected async post(config: ApiMethodConfig) {
    return this.makeRequest({ ...config, method: 'post' });
  }

  protected async delete(config: ApiMethodConfig) {
    return this.makeRequest({ ...config, method: 'delete' });
  }

  private async makeRequest(config: ApiRequestConfig): Promise<ApiResponse> {
    try {
      const { method, url, data } = config;

      const response = await fetch(url, {
        method,
        body: data ? JSON.stringify(data) : null,
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return await response.json();
    } catch (error) {
      console.warn('FETCH ERROR:', error);
      return {} as Promise<ApiResponse>;
    }
  }
}
