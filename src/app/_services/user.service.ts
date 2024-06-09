import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { environment } from '../environments/environtment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUrl!: string;
  constructor(private http: HttpClient, private auth: AuthService) {
    this.apiUrl = environment.apiUrl;
  }

  getAllUsers() {
    console.log(this.auth.user.value?.access_token);
    return this.http.get<User[]>(`${this.apiUrl}/user`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth.user.value?.access_token}`,
      },
    });
  }

  getUser(id: number) {
    return this.http.get<User>(`${this.apiUrl}/user/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth.user.value?.access_token}`,
      },
    });
  }

  updateUser(id: number, user: User) {
    return this.http.patch<any>(`${this.apiUrl}/user/${id}`, user);
  }
}
