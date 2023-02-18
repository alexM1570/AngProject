import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users = [];
 // console.log(users)
  constructor(private http:HttpClient){}

ngOnInit(){

  this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({next:(data:any) => this.users = data});
  

}

}
