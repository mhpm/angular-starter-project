import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnChanges {
  @Input() control: FormControl = new FormControl();
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() format = '';

  ngOnChanges(changes: SimpleChanges): void {}
}
