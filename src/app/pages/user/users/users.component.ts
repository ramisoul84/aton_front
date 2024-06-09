import { Component, OnInit } from '@angular/core';
import { LoginResponse, User } from '../../../_models/user';
import { AuthService } from '../../../_services/auth.service';
import { UserService } from '../../../_services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrl: 'users.component.scss',
})
export class UsersComponent implements OnInit {
  loggedInUser!: LoginResponse | null;
  users!: User[];
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((data) => {
      this.loggedInUser = data;
      if (this.loggedInUser) {
        this.userService.getAllUsers().subscribe((data) => {
          this.users = data;
        });
      }
    });
  }

  onChange(id: number) {
    this.userService.getUser(id).subscribe((user) => {
      const updatedUser = user;
      delete updatedUser.clients;
      updatedUser.isAdmin = !updatedUser.isAdmin;
      this.userService.updateUser(id, updatedUser).subscribe();
    });
  }
}
