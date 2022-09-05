import axios from '../../../config/axios.config';
import { GET_GLOBAL_RANKING } from '../queries';

const getGlobalRanking = async (page: number) => axios
  .post('/graphql', {
    query: GET_GLOBAL_RANKING,
    variables: { page },
  })
  .then((e) => e.data?.data?.globalRanking);

export default getGlobalRanking;
