import City from './city';
import { CityFields, CityResponse } from './types';

class CityFactory {
  static createFromResponse(response: CityResponse) {
    return new City(this.mapResponseToFields(response));
  }

  static mapResponseToFields(response: CityResponse): CityFields {
    return {
      id: response.id,
      city: response.city,
      state: response.state,
    };
  }

  static toResponse(city: City): CityResponse {
    return {
      id: city.id(),
      city: city.city(),
      state: city.state(),
    };
  }
}

export default CityFactory;
