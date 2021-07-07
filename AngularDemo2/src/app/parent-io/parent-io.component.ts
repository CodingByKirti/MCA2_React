import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-io',
  templateUrl: './parent-io.component.html',
  styleUrls: ['./parent-io.component.css']
})
export class ParentIoComponent implements OnInit {

  countClicks=0;
  status=""
  constructor() { }

  ngOnInit(): void {
  }
  sendTotalCount(){
    this.countClicks++
  }
  recvStatus(event){
    this.status=event
  }
}
