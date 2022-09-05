import { GET_USER_PROFILE } from '../queries';
import axios from '../../../config/axios.config';

const getUserProfile = async (username: string) => axios
  .post('/graphql', {
    query: GET_USER_PROFILE,
    variables: { username },
  })
  .then((e) => e.data?.data?.matchedUser);

export default getUserProfile;
