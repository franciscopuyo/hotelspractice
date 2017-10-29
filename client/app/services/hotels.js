import axios from 'axios';
import { getUrl } from 'config';

export default ({
  get: params => axios({
    method: 'get',
    url: getUrl('hotels'),
    params,
    responseType: 'json',
  }),
});
