import { AxiosInstance } from 'axios';

import { UserHobbieResponse } from '@/models/user-hobbie/types';
import UserHobbie from '@/models/user-hobbie/user-hobbie';
import UserHobbieFactory from '@/models/user-hobbie/user-hobbie-factory';
import { UserResponse } from '@/models/user/types';
import User from '@/models/user/user';
import UserFactory from '@/models/user/user-factory';

import { USERS_ENDPOINT } from './constants';
import { CreateUserData, EditUserData } from './types';
import { getUserEndpoint, deleteUserEndpoint } from './utils';

class UserClient {
  constructor(private api: AxiosInstance) {}

  async create(userData: CreateUserData): Promise<User> {
    const { data: createdUserResponse } = await this.api.post<UserResponse>(USERS_ENDPOINT, userData);
    const createdUser = UserFactory.createFromResponse(createdUserResponse);
    return createdUser;
  }

  async getById(userId: string): Promise<UserHobbie | null> {
    const { data: userResponse } = await this.api.get<UserHobbieResponse | null>(getUserEndpoint(userId));
    const user = userResponse ? UserHobbieFactory.createFromResponse(userResponse) : null;
    return user;
  }

  async getAll(): Promise<UserHobbie[]> {
    const { data: usersResponse } = await this.api.get<UserHobbieResponse[]>(USERS_ENDPOINT);
    const users = usersResponse.map((response) => UserHobbieFactory.createFromResponse(response));
    return users;
  }

  async edit(userId: string, userData: EditUserData): Promise<User> {
    const { data: editedUserResponse } = await this.api.put<UserResponse>(getUserEndpoint(userId), userData);
    const editedUser = UserFactory.createFromResponse(editedUserResponse);
    return editedUser;
  }

  async delete(userId: string): Promise<User> {
    const { data: deletedUserResponse } = await this.api.delete<UserResponse>(deleteUserEndpoint(userId));
    const deletedUser = UserFactory.createFromResponse(deletedUserResponse);
    return deletedUser;
  }
}

export default UserClient;
