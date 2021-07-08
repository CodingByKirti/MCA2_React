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
import { ParentIoComponent } from './parent-io/parent-io.component';
import { ChildIoComponent } from './parent-io/child-io/child-io.component';
import { TDFComponent } from './tdf/tdf.component';
import { TaskProgComponent } from './task-prog/task-prog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainareaComponent,
    EventBindComponent,
    TempComponent,
    ClassStyleComponent,
    MyCustomPipe,
    ParentIoComponent,
    ChildIoComponent,
    TDFComponent,
    TaskProgComponent
  ],
  imports: [
  BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
