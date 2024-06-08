import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { environment } from '../environments/environtment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUrl!: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getAllUsers() {
    return this.http.get<User[]>(`${this.apiUrl}/user`);
  }

  getUser(id: number) {
    return this.http.get<User>(`${this.apiUrl}/user/${id}`);
  }

  updateUser(id: number, user: User) {
    return this.http.patch<any>(`${this.apiUrl}/user/${id}`, user);
  }
}
