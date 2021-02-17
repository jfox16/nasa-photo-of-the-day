
import axios from 'axios';

const BASE_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'DEMO_KEY';

const fetchApod = () => {
  return axios.get(BASE_URL, {
    params: {
      'api_key': API_KEY
    }
  });
}

export default fetchApod;