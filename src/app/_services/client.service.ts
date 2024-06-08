import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../_models/client';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environtment';

@Injectable()
export class ClientService {
  private readonly apiUrl!: string;
  selectedClient = new BehaviorSubject<number>(0);
  selectedClient$ = this.selectedClient.asObservable();
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getAllClients() {
    return this.http.get<Client[]>(`${this.apiUrl}/client`);
  }

  getClient(id: number) {
    return this.http.get<Client>(`${this.apiUrl}/client/${id}`);
  }

  createClient(client: Client) {
    this.http.post(`${this.apiUrl}/client`, client).subscribe();
  }

  updateClient(id: number, client: Client) {
    return this.http.patch<any>(`${this.apiUrl}/client/${id}`, client);
  }

  removeClient(id: number) {
    return this.http.delete(`${this.apiUrl}/client/${id}`);
  }
}
