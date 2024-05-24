import { ApiService } from './Api';
import { Metric } from '../../types/common';

const API = '';

class MetricApi extends ApiService {
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

export const metricApi = new MetricApi();
