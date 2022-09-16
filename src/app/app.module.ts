import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CustomDropdownComponent } from './custom-dropdown/custom-dropdown.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent,CustomDropdownComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
