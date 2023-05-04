import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { TabsContainerComponent } from './tabs/tabs-container/tabs-container.component';
import { TabComponent } from './tabs/tab/tab.component';
import { ButtonComponent } from './button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    InputComponent,
    TabsContainerComponent,
    TabComponent,
    ButtonComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective, NgxMaskPipe],
  exports: [
    InputComponent,
    TabsContainerComponent,
    TabComponent,
    ButtonComponent,
  ],
  providers: [provideNgxMask()],
})
export class ComponentsModule {}
