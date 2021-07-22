import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revision',
  templateUrl: './revision.component.html',
  styleUrls: ['./revision.component.css']
})
export class RevisionComponent  {

  name :string ="Revision component"
  txt : string ="write here"
  message : string =""
email="abcd@sd.com"
fruit: string ="orange"
  customClass={
    'myclass1': false,
    'myclass':true
  }
  constructor() { }

  colors=['red','green','blue']

  disp(data){
    this.message="button is clicked "+data.value
  }
 show(event){
  console.log(event.target);
  
 }

 showFname(fname)
{
  console.log(fname);
  
}
}
