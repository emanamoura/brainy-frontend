import Hobbie from './hobbie';
import { HobbieFields, HobbieResponse } from './types';

class HobbieFactory {
  static createFromResponse(response: HobbieResponse) {
    return new Hobbie(this.mapResponseToFields(response));
  }

  static mapResponseToFields(response: HobbieResponse): HobbieFields {
    return {
      id: response.id,
      name: response.name,
    };
  }

  static toResponse(patient: Hobbie): HobbieResponse {
    return {
      id: patient.id(),
      name: patient.name(),
    };
  }
}

export default HobbieFactory;
