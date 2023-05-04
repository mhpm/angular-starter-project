import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { InputComponent } from 'src/app/components/input/input.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [SignUpComponent, SignInComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [SignUpComponent, SignInComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserModule {}
