import { Component, Input, OnInit } from '@angular/core';

import { User } from '../../models/index';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('Users') UsersList: User[];

  constructor() { }

  ngOnInit() {
  }

}
