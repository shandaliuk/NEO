import axios from 'axios';

import { NeoResponse } from '../../types/NeoResponseInterface';

const KEY = 'wuPvEnRvI4CeXRdL88478ENQKGedCaFM5CRGdAtp';

axios.defaults.baseURL = 'https://api.nasa.gov/neo/rest/v1/';

export const fetchDailyInfo = async (date: string) => {
  const response = await axios.get<NeoResponse>('feed', {
    params: {
      end_date: date,
      api_key: KEY,
    },
  });
  return response.data.near_earth_objects[date];
};
