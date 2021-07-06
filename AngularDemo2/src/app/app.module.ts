import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainareaComponent } from './mainarea/mainarea.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { TempComponent } from './temp/temp.component';
import { ClassStyleComponent } from './class-style/class-style.component';
import { FormsModule } from '@angular/forms';
import { MyCustomPipe } from './ExtraPipes/MyCustomPipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainareaComponent,
    EventBindComponent,
    TempComponent,
    ClassStyleComponent,
    MyCustomPipe
  ],
  imports: [
  BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
