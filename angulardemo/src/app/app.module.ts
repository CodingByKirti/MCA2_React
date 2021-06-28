import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { FirstcompComponent } from './firstcomp/firstcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    FirstcompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
