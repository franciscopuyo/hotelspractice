import axios from 'axios';
import config from 'config';

export default ({
  get: (params) => axios({
    method: 'get',
    url: config.url.hotels,
    params,
    responseType: 'json',
  }),
});