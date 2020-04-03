import axios from "axios";

// Force Axios to work with and accept JSON requests
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json;charset=UTF-8";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

axios.interceptors.request.use(
  config => config,
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);

export default axios;
