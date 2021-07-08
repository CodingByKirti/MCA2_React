import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TDFComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showValue(namebox){
    console.log(namebox);
    
  }
  onSubmit(myForm){
    console.log(myForm);
    
  }
}
