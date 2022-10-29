import City from '../city/city';
import { UserFields } from './types';

class User {
  private _id: string;
  private _name: string;
  private _email: string;
  private _city: City;

  constructor(fields: UserFields) {
    this._id = fields.id;
    this._name = fields.name;
    this._email = fields.email;
    this._city = fields.city;
  }

  id(): string {
    return this._id;
  }

  name(): string {
    return this._name;
  }

  email(): string {
    return this._email;
  }

  city(): City {
    return this._city;
  }
}

export default User;
