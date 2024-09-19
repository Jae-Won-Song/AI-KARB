import instance from '../apiConfig';

const fetchmytaskData = () => {
  return instance.post('/api/v1/user/my-task', {
    // keyword: 'keyword',
    // period: 'date',
    // state: true,
    // issue: true,
    // media: [],
    // category: [],
  });
};

export default fetchmytaskData;
