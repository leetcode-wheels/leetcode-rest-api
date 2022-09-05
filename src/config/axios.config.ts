import path from 'path';

import axios from 'axios';

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const axiosInstace = axios.create({
  baseURL: process.env.LEETCODE_BASE_URL,
});

export default axiosInstace;
