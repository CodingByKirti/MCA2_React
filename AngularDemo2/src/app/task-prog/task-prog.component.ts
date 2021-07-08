import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-prog',
  templateUrl: './task-prog.component.html',
  styleUrls: ['./task-prog.component.css']
})
export class TaskProgComponent implements OnInit {

taskList = Array()
todo : string =""
  constructor() { }

  ngOnInit(): void {
  }
  addTask(ntask){
    	this.todo= ntask;
     this.taskList.push(this.todo)
  }
  delTask(index)
  {
    this.taskList.splice(index,1) 
  }
}
