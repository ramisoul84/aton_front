import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse, LoginUserDto, RegisterUserDto } from '../_models/user';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../environments/environtment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly storageName!: string;
  private readonly apiUrl!: string;
  user = new BehaviorSubject<LoginResponse | null>(
    JSON.parse(localStorage.getItem(this.storageName)!)
  );
  user$ = this.user.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this.apiUrl = environment.apiUrl;
    this.storageName = environment.storageName;
  }

  register(user: RegisterUserDto) {
    this.http.post<any>(`${this.apiUrl}/auth/register`, user).subscribe(() => {
      alert('user has registered successfully');
      this.router.navigate(['login']);
    });
  }

  login(user: LoginUserDto) {
    this.http.post<any>(`${this.apiUrl}/auth/login`, user).subscribe((data) => {
      this.user.next(data);
      localStorage.setItem(this.storageName, JSON.stringify(data));
      this.router.navigate(['']);
    });
  }

  logout() {
    localStorage.removeItem(this.storageName);
    this.user.next(JSON.parse(localStorage.getItem(this.storageName)!));
    this.router.navigate(['login']);
  }
}
