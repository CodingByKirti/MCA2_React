import { Component, OnInit } from '@angular/core';
import { DataProvService } from './../appServices/data-prov.service';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {

    users :any ={}
  constructor(private __dp: DataProvService) { }

  ngOnInit(): void {
    this.__dp.getUsers().subscribe(users=>this.users= users)
  }


  // subscribe(data){
  //   this.users = data
  // }

}
