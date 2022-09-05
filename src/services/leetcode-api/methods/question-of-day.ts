import axios from '../../../config/axios.config';
import GET_QUESTION_OF_DAY from '../queries/question-of-day';

const getQuestionOfDay = async () => axios
  .post('/graphql', {
    query: GET_QUESTION_OF_DAY,
  })
  .then((e) => e.data?.data);

export default getQuestionOfDay;
