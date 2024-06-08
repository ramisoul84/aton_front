import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/user/user.module').then((m) => m.UserModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/client/client.module').then((m) => m.ClientModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
