/* eslint-disable import/no-cycle */
import Hobbie from '../hobbie/hobbie';
import User from '../user/user';

export interface UserHobbieResponse {
  user: User;
  hobbies: Hobbie[];
}

export interface UserHobbieFields {
  user: User;
  hobbies: Hobbie[];
}
