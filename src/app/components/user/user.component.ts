import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import { User, Message } from '../../models/index';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('Users') UsersList: User[];

  @Output() ChangedUserEvent: EventEmitter<Message[]> = new EventEmitter<Message[]>();

  constructor() { }

  OnChangedUser(user: User) {
    this.ChangedUserEvent.emit(user.messages);
  }

  ngOnInit() {
  }

}
