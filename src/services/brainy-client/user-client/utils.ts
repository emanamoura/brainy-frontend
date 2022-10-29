import { USERS_ENDPOINT } from './constants';

export function getUserEndpoint(userId: string) {
  return `${USERS_ENDPOINT}/${userId}`;
}

export function deleteUserEndpoint(userId: string) {
  return `${USERS_ENDPOINT}/${userId}`;
}
