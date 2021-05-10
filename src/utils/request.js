import axios from "axios";

const service = axios.create({
  baseURL: "https://book.youbaobao.xyz:18082",
  timeout: 5000
});

// 拦截器
service.interceptors.response.use(
  response => {
    if (response.status === 200 && response.data) {
      return response.data;
    } else {
      return Promise.reject(new Error("请求失败"));
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
