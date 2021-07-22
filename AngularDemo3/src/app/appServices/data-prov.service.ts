import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({          // DI framework  can use this as 
  providedIn: 'root'    // app 
})
export class DataProvService {

  students = [
      {roll:1, name:"Somya", stream:"IT"},
      {roll:2, name:"Swayam", stream:"Commerce"},

      {roll:3, name:"Aradhya", stream:"IT"},

      {roll:4, name:"Meenal", stream:"Arts"},

  ]
  constructor(private httpClient: HttpClient) { }

  getAllStudents(){
    return this.students;
  }
  getUsers():Observable<any>{
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users"); 
  }
}
