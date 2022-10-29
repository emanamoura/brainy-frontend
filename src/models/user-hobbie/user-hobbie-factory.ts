import { UserHobbieFields, UserHobbieResponse } from './types';
import UserHobbie from './user-hobbie';

class UserHobbieFactory {
  static createFromResponse(response: UserHobbieResponse) {
    return new UserHobbie(this.mapResponseToFields(response));
  }

  static mapResponseToFields(response: UserHobbieResponse): UserHobbieFields {
    return {
      user: response.user,
      hobbies: response.hobbies,
    };
  }

  static toResponse(userHobbie: UserHobbie): UserHobbieResponse {
    return {
      user: userHobbie.user(),
      hobbies: userHobbie.hobbies(),
    };
  }
}

export default UserHobbieFactory;
