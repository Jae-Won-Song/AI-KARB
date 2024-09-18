import axios from 'axios';

const accesstoken =
  'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJhZG1pbiIsImlhdCI6MTcyNTkwNjIwNSwiZXhwIjozMzI4MzUwNjIwNX0.Zv5azH6MospdmtBrqMasTSiLeZxS_8_qpSYfjhoa6Xk';

/*
 * axios 인스턴스 생성
 */
const instance = axios.create({
  baseURL: 'https://www.neuroflow-fastcampus.store',
  // https://www.neuroflow-fastcampus.store
  // http://13.124.172.3:8880
});

instance.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${accesstoken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;

/*
 * 요청 인터셉터 추가
 */
// instance.interceptors.request.use(
//   (config) => {
//     const modifiedConfig = { ...config };
//     const accessToken = localStorage.getItem('accessToken');
//     if (accessToken) {
//       modifiedConfig.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

/*
 * 응답 인터셉터 설정
 * 로그인 토큰이 만료되었을 때, 로그인 페이지로 이동
 */
// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       window.location.href = '/signin';
//       localStorage.removeItem('accessToken');
//       localStorage.removeItem('refreshToken');
//     }
//     return Promise.reject(error);
//   },
// );
