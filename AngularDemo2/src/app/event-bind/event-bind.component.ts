import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css']
})
export class EventBindComponent implements OnInit {
 
    uname :string ="students"
    student = {
      name : "Aditya Kapoor",
      course : "Full Stack Development",
      fee : 10000,
      startDate : new Date(2021,5,20),
      percentage : 88.9765
    }
    firstName : string =""
    message : string ="";
    prodInfo:string = "" ;
    wishMessage : string ="";
    userName ="";
    constructor() { }
    comments : string = "" 
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
