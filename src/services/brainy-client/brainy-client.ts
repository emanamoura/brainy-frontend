import axios, { AxiosInstance } from 'axios';

import globalConfig from '@/config/global-config/global-config';

import CityClient from './city-client/city-client';
import HobbieClient from './hobbies-client/hobbie-client';
import UserClient from './user-client/user-client';

class BrainyClient {
  private api: AxiosInstance;

  users: UserClient;
  city: CityClient;
  hobbie: HobbieClient;

  constructor() {
    const baseURL = globalConfig.baseBrainyURL();
    this.api = this.createAPIInstance(baseURL);

    this.users = new UserClient(this.api);
    this.city = new CityClient(this.api);
    this.hobbie = new HobbieClient(this.api);
  }

  private createAPIInstance(baseURL: string): AxiosInstance {
    const api = axios.create({ baseURL });
    return api;
  }

  baseURL(): string | undefined {
    return this.api.defaults.baseURL;
  }
}

export default BrainyClient;
