import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show(namebox){
      console.log(namebox);
      
  }
  onSubmit(form){
    console.log(form.value.namebox);
    
  }
}
