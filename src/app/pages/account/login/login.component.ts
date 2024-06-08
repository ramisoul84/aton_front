import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginResponse } from '../../../_models/user';
import { AuthService } from '../../../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loggedInUser!: LoginResponse | null;
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: this.fb.control('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
    this.authService.user$.subscribe((data) => (this.loggedInUser = data));
  }

  onSubmit() {
    this.authService.login(this.loginForm.value);
  }
}
