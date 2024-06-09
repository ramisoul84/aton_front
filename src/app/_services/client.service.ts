import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../_models/client';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environtment';
import { AuthService } from './auth.service';

@Injectable()
export class ClientService {
  private readonly apiUrl!: string;
  selectedClient = new BehaviorSubject<number>(0);
  selectedClient$ = this.selectedClient.asObservable();
  constructor(private http: HttpClient, private auth: AuthService) {
    this.apiUrl = environment.apiUrl;
  }

  getAllClients() {
    return this.http.get<Client[]>(`${this.apiUrl}/client`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth.user.value?.access_token}`,
      },
    });
  }

  getClient(id: number) {
    return this.http.get<Client>(`${this.apiUrl}/client/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth.user.value?.access_token}`,
      },
    });
  }

  createClient(client: Client) {
    this.http
      .post(`${this.apiUrl}/client`, client, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.auth.user.value?.access_token}`,
        },
      })
      .subscribe();
  }

  updateClient(id: number, client: Client) {
    return this.http.patch<any>(`${this.apiUrl}/client/${id}`, client, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth.user.value?.access_token}`,
      },
    });
  }

  removeClient(id: number) {
    return this.http.delete(`${this.apiUrl}/client/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth.user.value?.access_token}`,
      },
    });
  }
}
