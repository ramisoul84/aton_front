import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      surname: this.fb.control('', [Validators.required]),
      name: this.fb.control('', [Validators.required]),
      patronymic: this.fb.control(''),
      username: this.fb.control('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onSubmit() {
    this.authService.register(this.registerForm.value);
  }
}
