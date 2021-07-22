import { Component, OnInit } from '@angular/core';
import { MessageService } from './../appServices/MessageService';
import { DataProvService } from './../appServices/data-prov.service';

@Component({
  selector: 'app-child-comp1',
  templateUrl: './child-comp1.component.html',
  styleUrls: ['./child-comp1.component.css']
})
export class ChildComp1Component implements OnInit {


  stdList : any ={}
  constructor(private _ds:DataProvService) {
  
   }

  ngOnInit(): void {
  }

  show(){
    const ms = new MessageService();
    ms.showMsg();
  }
  getAll(){
 this.stdList = this._ds.getAllStudents()
  }
}
