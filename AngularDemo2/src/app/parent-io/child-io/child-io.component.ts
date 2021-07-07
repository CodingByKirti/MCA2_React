import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-io',
  templateUrl: './child-io.component.html',
  styleUrls: ['./child-io.component.css']
})
export class ChildIoComponent implements OnInit {

  @Input() clickCounter ; // to recv data from Parent
  @Output() limit  = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(event){
    
    this.limit.emit("Counter recd")
    // if(this.clickCounter>=10)
    // this.limit.emit("Limit of counter reached to 10")
    // else
    // this.limit.emit("Keep the limit of clicks to 10 only")
  }
      // eventEmitter == event
      // @Output() cData:EventEmitter = new EventEmitter();
      
      
}
