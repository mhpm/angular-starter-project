import { Component, EventEmitter, Input, Output } from '@angular/core';

const variant_buttons: any = {
  primary: 'teal',
  secondary: 'gray',
  info: 'sky',
  warning: 'yellow',
  danger: 'red',
};

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label: string = 'label';
  @Input() variant: string = 'primary';
  @Input() disabled = false;
  @Output() onClick = new EventEmitter<any>();

  onClickButton(event: any) {
    this.onClick.emit(event);
  }
}
