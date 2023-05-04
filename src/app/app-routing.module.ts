import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';
import { LoginPageComponent } from './pages/login/login-page.component';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
