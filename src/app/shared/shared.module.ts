import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabListModule } from './TabList/tab-list.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, TabListModule],
  exports: [TabListModule],
})
export class SharedModule {}
