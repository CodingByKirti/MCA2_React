import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainarea',
  templateUrl: './mainarea.component.html',
  styleUrls: ['./mainarea.component.css']
})
export class MainareaComponent implements OnInit {
  fname : string ="Kirti";
  lname : string = "Sharma";
  data =""
  Hello ="guest"
  canRead:boolean = true;
  isHidden :boolean =false;
  constructor() { }

  ngOnInit(): void {
  }

  fun():string {
    return this.fname+" "+this.lname;
  }

   

}
