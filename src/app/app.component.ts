import { UserService } from './service/user.service';
import { Component, OnInit } from '@angular/core';

import { MessageComponent, NewMessageComponent, UserComponent } from './components/index';
import { User, Message } from './models/index';
// import * as UserModel from './models/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: User[];
  messages: Message[];
  isMessageExists: boolean;

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(res => {
      this.users = res;
      this.messages = this.users[0].messages;
      this.isMessageExists = (this.messages.length > 0) ? true : false;
    },
      err => console.log(err));
  }

  OnChangedUser(data: Message[]) {
    console.log(data);
    this.messages = data;
    this.isMessageExists = (this.messages.length > 0) ? true : false;
  }

  ngOnInit() {

  }
}
