import { UserService } from './service/user.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MessageComponent, NewMessageComponent, UserComponent } from './components/index';
import { User } from './models/index';
// import * as UserModel from './models/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: Array<User>;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((res) => this.users = res);
  }
}
