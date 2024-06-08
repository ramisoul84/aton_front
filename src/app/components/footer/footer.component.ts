import { Component, OnInit } from '@angular/core';
import { LoginResponse } from '../../_models/user';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  loggedInUser!: LoginResponse | null;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((data) => (this.loggedInUser = data));
  }

  logout() {
    this.authService.logout();
  }
}
