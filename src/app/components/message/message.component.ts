import { Component, OnInit, Input } from '@angular/core';

import { Message } from './../../models/user.model';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() messageArray: Message[];

  constructor() {

  }

  ngOnInit() {
  }

}
