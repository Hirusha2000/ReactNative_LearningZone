import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: 'https://test-ijse.requestcatcher.com',
});

// request interceptor
AxiosInstance.interceptors.request.use(
  request => {
    console.log('Sending new request: ', request.url);
    request.headers.set('Authorization', 'Bearer sample-access-token-comes-here');
    return request;
  },
  error => {
    return Promise.reject(error);
  },
);

// response interceptor
AxiosInstance.interceptors.response.use(
  response => {
    console.log('Response received: ' + response.status);
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);
