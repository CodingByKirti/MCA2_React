import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';



@NgModule({
  declarations: [
    Comp1Component,
    Comp2Component
  ], // empty by default as there is no component registered here
  imports: [
    CommonModule   // has basic building directives 
  ],
  exports:[Comp1Component,Comp2Component]
})
export class Module1Module { }
