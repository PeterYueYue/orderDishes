import axios from 'axios';

export const queryMessage = params => {
  return axios.post('/', params).then(res => res.data);
};
