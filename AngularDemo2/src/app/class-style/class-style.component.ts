import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent implements OnInit {
  uname:string = "admin"
  favColor="red"
  colors=['red','green','blue']
  isApply : boolean =true;
  constructor() { }

  customObj={
    'class1':true,
    'class2':false
  }
  customObj1={'color':'red', 'border':'dotted 15px blue', 'background-color':'teal'}
  ngOnInit(): void {
  }

}
