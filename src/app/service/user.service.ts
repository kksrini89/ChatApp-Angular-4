import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

import { User } from '../models/index';

@Injectable()
export class UserService {
  // public _url: string = 'http://demo4842709.mockable.io/users';
  public _url: string = 'https://raw.githubusercontent.com/kksrini89/ChatApp-Angular-4/master/src/app/service/users.json';
  constructor(private _http: HttpClient) { }

  /**
   * GET Users
   */
  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(this._url);
  }
}
