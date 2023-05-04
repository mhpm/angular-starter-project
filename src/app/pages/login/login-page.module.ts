import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page.component';
import { UserModule } from 'src/app/modules/user/user.module';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
];

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    UserModule,
    RouterModule.forChild(routes),
    ComponentsModule,
  ],
})
export class LoginPageModule {}
