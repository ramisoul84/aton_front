import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../_services/client.service';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  { path: 'clients', component: ClientsComponent },
  { path: 'client', component: ClientComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule, CommonModule],
  declarations: [ClientsComponent, ClientComponent],
  providers: [ClientService],
})
export class ClientModule {}
