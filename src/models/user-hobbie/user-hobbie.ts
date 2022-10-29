import City from '../city/city';
import Hobbie from '../hobbie/hobbie';
import User from '../user/user';
import { UserHobbieFields } from './types';

class UserHobbie {
  private _user: User;
  private _hobbies: Hobbie[];

  constructor(fields: UserHobbieFields) {
    const city = new City({
      id: fields.user.city.id,
      city: fields.user.city.city,
      state: fields.user.city.state,
    });
    const user = new User({ id: fields.user.id, name: fields.user.name, email: fields.user.email, city });
    const hobbies = fields.hobbies.map((hobbie) => new Hobbie({ id: hobbie.id, name: hobbie.name }));
    this._user = user;
    this._hobbies = hobbies;
  }

  user(): User {
    return this._user;
  }

  hobbies(): Hobbie[] {
    return this._hobbies;
  }
}

export default UserHobbie;
