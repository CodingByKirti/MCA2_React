import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-r-form',
  templateUrl: './r-form.component.html',
  styleUrls: ['./r-form.component.css']
})
export class RFormComponent implements OnInit {

  myRF : FormGroup
  constructor() { }

  ngOnInit(): void {
    this.myRF = new FormGroup({
      'fname': new FormControl(null,[Validators.required,Validators.email]),
      'lname': new FormControl(null),
      'education': new FormControl('graduate')
    })
  }

  onSubmit(){
    console.log(this.myRF);
    
  }

}
