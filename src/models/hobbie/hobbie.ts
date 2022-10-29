import { HobbieFields } from './types';

class Hobbie {
  private _id: string;
  private _name: string;

  constructor(fields: HobbieFields) {
    this._id = fields.id;
    this._name = fields.name;
  }

  id(): string {
    return this._id;
  }

  name(): string {
    return this._name;
  }
}

export default Hobbie;
