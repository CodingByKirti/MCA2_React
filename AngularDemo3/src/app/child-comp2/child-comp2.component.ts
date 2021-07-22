import { Component, OnInit } from '@angular/core';
import { MessageService } from './../appServices/MessageService';

@Component({
  selector: 'app-child-comp2',
  templateUrl: './child-comp2.component.html',
  styleUrls: ['./child-comp2.component.css']
})
export class ChildComp2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show(){
    const ms = new MessageService();
    ms.showMsg();
  }
}
