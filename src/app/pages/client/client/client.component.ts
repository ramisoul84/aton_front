import { Component } from '@angular/core';
import { Client } from '../../../_models/client';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../../../_services/client.service';
import { UserService } from '../../../_services/user.service';
import { User } from '../../../_models/user';
import { map } from 'rxjs';

@Component({
  selector: 'app-client',
  templateUrl: 'client.component.html',
  styleUrl: 'client.component.scss',
})
export class ClientComponent {
  clientForm!: FormGroup;
  users: { id: number; fullName: string }[] = [];
  selectedClient!: number;
  editClient!: Client;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private clientService: ClientService,
    private router: Router
  ) {
    this.userService
      .getAllUsers()
      .pipe(
        map((users: User[]) => {
          users.map((user) => {
            this.users.push({
              id: user.id!,
              fullName: `${user.surname} ${user.name} ${user.patronymic}`,
            });
          });
        })
      )
      .subscribe();
  }

  initialForm() {
    this.clientForm = this.fb.group({
      surname: this.fb.control('', [Validators.required]),
      name: this.fb.control('', [Validators.required]),
      patronymic: this.fb.control(''),
      dateOfBirth: this.fb.control('', [Validators.required]),
      inn: this.fb.control('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern(`^[0-9]{10}$`),
      ]),
      responsibleUser: this.fb.control('', [Validators.required]),
      status: this.fb.control('PENDING', [Validators.required]),
    });
  }

  async ngOnInit() {
    this.initialForm();
    this.clientService.selectedClient$.subscribe((id) => {
      this.selectedClient = id;
      this.clientService.getClient(id).subscribe((data) => {
        this.editClient = data;
        if (this.selectedClient !== 0) {
          this.clientForm.controls['surname'].setValue(
            this.editClient?.surname
          );
          this.clientForm.controls['name'].setValue(this.editClient?.name);
          this.clientForm.controls['patronymic'].setValue(
            this.editClient?.patronymic
          );
          this.clientForm.controls['dateOfBirth'].setValue(
            this.editClient?.dateOfBirth
          );
          this.clientForm.controls['inn'].setValue(this.editClient?.inn);
          this.clientForm.controls['responsibleUser'].setValue(
            this.editClient?.userId
          );
          this.clientForm.controls['status'].setValue(this.editClient?.status);
        }
      });
    });
  }

  onSubmit() {
    const responsibleUser = this.users.find(
      (user) =>
        user.id === Number(this.clientForm.controls['responsibleUser'].value)
    );
    const client: Client = {
      surname: this.clientForm.controls['surname'].value,
      name: this.clientForm.controls['name'].value,
      patronymic: this.clientForm.controls['patronymic'].value,
      dateOfBirth: this.clientForm.controls['dateOfBirth'].value,
      inn: this.clientForm.controls['inn'].value,
      status: this.clientForm.controls['status'].value,
      userId: this.clientForm.controls['responsibleUser'].value,
      responsibleUser: responsibleUser?.fullName!,
    };
    if (this.selectedClient == 0) {
      this.clientService.createClient(client);
      alert('client has added');
    } else {
      this.clientService.updateClient(this.selectedClient, client).subscribe();
      alert('client has edited');
    }

    this.router.navigate(['clients']);
  }
}
