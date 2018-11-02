import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, IProfile
 {
  id: number;
  firstname: string;
  lastname: string;
  avatar: string;
  users: any;

  private nbInstance: number = 0;

  constructor(private userService: UserService){}

getNbInstance(): number {
   return this.nbInstance+1;
 } 

ngOnInit(): void {
  this.getUsers();
  let first:IProfile = {id:1 , firstname: 'Brad', lastname:'Pitt', avatar: 'actor', getNbInstance: () => this.nbInstance+1};
  let second:IProfile = {id:1 , firstname: 'Angelina', lastname:'Jolie', avatar: 'actor', getNbInstance: () => this.nbInstance+1};
}
getUsers(){
this.userService.getUsers().subscribe(response => this.users = response.data);
}
}

interface IProfile {
  id: number;
  firstname: string;
  lastname: string;
  avatar: string;
  getNbInstance(): number;
  }
  
  interface IProfile1 {
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
    getNbInstance(): number;
    }

