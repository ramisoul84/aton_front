import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UserService } from '../../_services/user.service';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  declarations: [UsersComponent, UserComponent],
  providers: [UserService],
})
export class UserModule {}
