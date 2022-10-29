import { AxiosInstance } from 'axios';

import Hobbie from '@/models/hobbie/hobbie';
import HobbieFactory from '@/models/hobbie/hobbie-factory';
import { HobbieResponse } from '@/models/hobbie/types';

import { HOBBIE_ENDPOINT } from './constants';

class HobbieClient {
  constructor(private api: AxiosInstance) {}

  async get(): Promise<Hobbie[]> {
    const { data: hobbiesResponses } = await this.api.get<HobbieResponse[]>(HOBBIE_ENDPOINT);
    const hobbies = hobbiesResponses.map((response) => HobbieFactory.createFromResponse(response));
    return hobbies;
  }
}

export default HobbieClient;
