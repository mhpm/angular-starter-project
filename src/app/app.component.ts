import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'starter-project';
  tabs = [
    {
      tabTitle: 'Home',
      active: false,
      content: 'Home Connent',
    },
    {
      tabTitle: 'Contact',
      active: false,
      content: 'About Connent',
    },
    {
      tabTitle: 'About',
      active: false,
      content: 'About Connent',
    },
  ];
}
