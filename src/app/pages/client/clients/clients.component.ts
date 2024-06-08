import { Component, OnInit } from '@angular/core';
import { Client } from '../../../_models/client';
import { LoginResponse } from '../../../_models/user';
import { AuthService } from '../../../_services/auth.service';
import { ClientService } from '../../../_services/client.service';
import { UserService } from '../../../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: 'clients.component.html',
  styleUrl: 'clients.component.scss',
})
export class ClientsComponent implements OnInit {
  loggedInUser!: LoginResponse | null;
  clients!: Client[];
  toggleClients: boolean = true;
  constructor(
    private authService: AuthService,
    private clientService: ClientService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((data) => (this.loggedInUser = data));
    if (this.loggedInUser) {
      this.loggedInUser?.isAdmin
        ? this.clientService.getAllClients().subscribe((data) => {
            this.clients = data;
          })
        : this.userService.getUser(this.loggedInUser?.id!).subscribe((data) => {
            this.clients = data.clients!;
          });
    }
  }

  addCLient() {
    this.clientService.selectedClient.next(0);
    this.router.navigate(['client']);
  }

  editClient(id: number) {
    this.clientService.selectedClient.next(id);
    this.router.navigate(['client']);
  }
  deleteCLient(id: number) {
    this.clientService.removeClient(id).subscribe(() => {
      alert('client has deleted');
      this.clientService.getAllClients().subscribe((data) => {
        this.clients = data;
      });
    });
  }

  changeStatus(id: number, status: string) {
    this.clientService.getClient(id).subscribe((client) => {
      client.status = status;
      this.clientService
        .updateClient(id, client)
        .subscribe(() => console.log('changed'));
    });
  }

  onToggleClients() {
    this.toggleClients = !this.toggleClients;
    this.toggleClients
      ? this.clientService.getAllClients().subscribe((data) => {
          this.clients = data;
        })
      : this.userService
          .getUser(this.loggedInUser?.id!)
          .subscribe((data) => (this.clients = data.clients!));
  }
}
