import instance from '../apiConfig';

const fetchDashBoardData = () => {
  return instance.get('/api/v1/dashboard');
};

export default fetchDashBoardData;
