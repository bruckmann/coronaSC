import axios from 'axios';

const covidAPI = axios.create({
  baseURL: 'https://covid19-brazil-api.now.sh/api/report/v1/brazil',
});

export default covidAPI;
