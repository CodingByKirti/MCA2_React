import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TdFormComponent } from './td-form/td-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RFormComponent } from './r-form/r-form.component';
import { ChildcompComponent } from './childcomp/childcomp.component';
import { ChildComp1Component } from './child-comp1/child-comp1.component';
import { ChildComp2Component } from './child-comp2/child-comp2.component';
import { DataProviderComponent } from './appServices/data-provider/data-provider.component';
import {HttpClientModule} from '@angular/common/http';
import { ConsumerComponent } from './consumer/consumer.component'
import { Module1Module } from './module1/module1.module';
import { RevisionComponent } from './revision/revision.component';
import { CPipe } from './pipes/CPipe';
@NgModule({
  declarations: [
    AppComponent,
    TdFormComponent,
    RFormComponent,
    ChildcompComponent,
    ChildComp1Component,
    ChildComp2Component,
    DataProviderComponent,
    ConsumerComponent,
    RevisionComponent,
    CPipe
  ],
  imports: [
 
  BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Module1Module
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
