import { CityFields } from './types';

class City {
  private _id: string;
  private _city: string;
  private _state: string;

  constructor(fields: CityFields) {
    this._id = fields.id;
    this._city = fields.city;
    this._state = fields.state;
  }

  id(): string {
    return this._id;
  }

  city(): string {
    return this._city;
  }

  state(): string {
    return this._state;
  }
}

export default City;
