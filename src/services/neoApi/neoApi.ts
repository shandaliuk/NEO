import axios from 'axios';

import { NeoResponse } from 'types/NeoResponseInterface';

const KEY = import.meta.env.VITE_NASA_API_KEY;

axios.defaults.baseURL = 'https://api.nasa.gov/neo/rest/v1/';

export const fetchDailyInfo = async (date: string) => {
  const response = await axios.get<NeoResponse>('feed', {
    params: {
      start_date: date,
      end_date: date,
      api_key: KEY,
    },
  });
  return response.data.near_earth_objects[date];
};
