import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  password = new FormControl('');

  registerForm = new FormGroup({
    name: this.name,
    password: this.password,
  });
}
