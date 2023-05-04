import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageModule } from './home/home-page.module';
import { ContactPageModule } from './contact/contact-page.module';
import { LoginPageModule } from './login/login-page.module';
import { ContactPageComponent } from './contact/contact-page.component';
import { LoginPageComponent } from './login/login-page.component';
import { HomePageComponent } from './home/home-page.component';
import { Routes } from '@angular/router';
import { ComponentsModule } from '../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    // children: [
    //   {
    //     path: 'contact',
    //     loadChildren: () =>
    //       import('../pages/contact/contact-page.module').then(
    //         (m) => m.ContactPageModule
    //       ),
    //   },
    //   {
    //     path: 'login',
    //     loadChildren: () =>
    //       import('../pages/login/login-page.module').then(
    //         (m) => m.LoginPageModule
    //       ),
    //   },
    // ],
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomePageModule,
    ContactPageModule,
    LoginPageModule,
    ComponentsModule,
  ],
  exports: [HomePageModule, ContactPageModule, LoginPageModule],
})
export class PagesModule {}
