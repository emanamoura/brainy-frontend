import { AxiosInstance } from 'axios';

import Publication from '@/models/city/city';
import PublicationFactory from '@/models/city/city-factory';
import { CityResponse } from '@/models/city/types';

import { CITY_ENDPOINT } from './constants';

class CityClient {
  constructor(private api: AxiosInstance) {}

  async get(): Promise<Publication[]> {
    const { data: citiesResponses } = await this.api.get<CityResponse[]>(CITY_ENDPOINT);
    const publications = citiesResponses.map((response) => PublicationFactory.createFromResponse(response));
    return publications;
  }
}

export default CityClient;
