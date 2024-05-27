import { ApiService } from './Api';
import { Metric } from '../../types/common';

class MetricsApi extends ApiService {
  public init() {
    this.post({
      url: 'http://localhost:3000/api/init',
    }).then((response) => {
      console.log(response.result.message);
    });
  }

  public status() {
    this.get({ url: 'http://localhost:3000/status' }).then((response) => {
      console.log(response.result.message);
    });
  }

  public send(data: Metric) {
    this.post({
      url: 'http://127.0.0.1:3000/api/metric',
      data: { ...data },
    }).then((response) => {
      console.log(response);
    });
  }
}

export const metricsApi = new MetricsApi();
