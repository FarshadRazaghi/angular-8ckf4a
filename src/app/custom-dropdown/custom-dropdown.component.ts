import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Options } from '../options';

@Component({
  selector: 'custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.css'],
})
export class CustomDropdownComponent implements OnInit {
  constructor() {}

  public testForm: NgForm;
  public isDropDownOpen: boolean = false;
  public dropdown: string = '';
  public filteredOptions: Options[] = [];

  @Input('options') options: Options[];

  ngOnInit() {
    this.options.forEach((opt) => {
      opt.isActive = false;
      opt.selectable = true;
    });
    this.options.splice(0, 0, {
      value: 'SELECT A VALUE',
      isActive: false,
      key: null,
      selectable: true,
    });
    this.filteredOptions = this.options;
    this.dropdown = this.filteredOptions.find((x) => x.key == null).value;
  }

  onKeyDown(value) {
    console.clear();
    console.log(value);
    this.isDropDownOpen = true;
    this.filteredOptions = this.options.filter((x) =>
      x.value.toLowerCase().includes(value.toLowerCase())
    );

    if (this.filteredOptions.length === 0) {
      this.filteredOptions.push({
        value: 'No Match Found',
        key: null,
        isActive: false,
        selectable: false,
      });
    }

    console.log(this.filteredOptions);
    console.log(this.options);
  }

  toggleDropdown() {
    this.isDropDownOpen = !this.isDropDownOpen;
  }

  selectOption(evt: any, optionIndex: number, item: Options) {
    if (item.selectable) {
      console.log(evt);
      console.log(optionIndex);
      console.log(item);
      this.options.forEach((opt: any, index: number) => {
        opt.isActive = optionIndex === index;
      });
      this.dropdown = evt.target.innerHTML.trim();
      this.isDropDownOpen = false;
    }
  }
}
