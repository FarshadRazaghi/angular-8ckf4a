import { Component } from '@angular/core';
import { Options } from './options';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public optionsList1: Options[] = [
    {
      value: 'Lorem Ipsum is simply dummy text',
      key: 'firstoption',
    },
    {
      value: 'It is a long established',
      key: 'secondoption',
    },
    { value: 'Hello World', key: 'thirdoption' },
    { value: 'Apple', key: 'forthoption' },
    { value: 'Orange', key: 'fifthoption' },
  ];
}
