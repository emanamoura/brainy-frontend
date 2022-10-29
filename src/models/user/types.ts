import City from '../city/city';

export interface UserResponse {
  id: string;
  name: string;
  email: string;
  city: City;
}

export interface UserFields {
  id: string;
  name: string;
  email: string;
  city: City;
}
