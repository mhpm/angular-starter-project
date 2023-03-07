import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactModule } from './contact/contact.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ContactModule, HomeModule],
  exports: [ContactModule, HomeModule],
})
export class SharedModule {}
