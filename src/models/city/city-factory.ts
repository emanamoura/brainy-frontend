import City from './city';
import { CityFields, CityResponse } from './types';

class PublicationFactory {
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

  static toResponse(publication: City): CityResponse {
    return {
      id: publication.id(),
      city: publication.city(),
      state: publication.state(),
    };
  }
}

export default PublicationFactory;
