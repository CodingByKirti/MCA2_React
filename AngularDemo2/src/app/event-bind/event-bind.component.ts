import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css']
})
export class EventBindComponent implements OnInit {

    message : string ="";
    prodInfo:string = "" ;
    wishMessage : string ="";
    constructor() { }

  ngOnInit(): void {
  }
  
  showMessage(){
    this.message=" Product added to cart!!!"
  }
  show(event){
    console.log(event.target.value);
    
  }
  addProd(event){
    this.prodInfo= event.target.value +" is added to cart"
  }
  processWish(data){
    this.wishMessage = "your "+data.value +" will come true in next 6 months";
  }

}
