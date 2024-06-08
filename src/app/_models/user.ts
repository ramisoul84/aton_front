import { Client } from './client';

export interface User {
  id?: number;
  surname?: string;
  name?: string;
  patronymic?: string;
  username?: string;
  password?: string;
  isAdmin?: boolean;
  createdAt?: Date;
  lastLoginAt?: Date;
  clients?: Client[];
}

export interface LoginUserDto {
  username: string;
  password: string;
}

export interface RegisterUserDto {
  surname: string;
  name: string;
  patronymic?: string;
  username: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  surname: string;
  name: string;
  patronymic?: string;
  username: string;
  isAdmin: boolean;
  access_token: string;
}
