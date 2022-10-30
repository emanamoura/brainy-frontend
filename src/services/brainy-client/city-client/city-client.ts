import { AxiosInstance } from 'axios';

import City from '@/models/city/city';
import CityFactory from '@/models/city/city-factory';
import { CityResponse } from '@/models/city/types';

import { CITY_ENDPOINT } from './constants';

class CityClient {
  constructor(private api: AxiosInstance) {}

  async get(): Promise<City[]> {
    const { data: citiesResponses } = await this.api.get<CityResponse[]>(CITY_ENDPOINT);
    const cities = citiesResponses.map((response) => CityFactory.createFromResponse(response));
    return cities;
  }
}

export default CityClient;
