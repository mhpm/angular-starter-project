import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  age = new FormControl('', [
    Validators.required,
    Validators.min(18),
    Validators.max(100),
  ]);
  phone_number = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  confirm_password = new FormControl('', [Validators.required]);

  signUnForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    phone_number: this.phone_number,
    password: this.password,
    confirm_password: this.confirm_password,
  });
}
