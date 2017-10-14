import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/index';

@Injectable()
export class UserService {
  public _url: string = 'http://demo4842709.mockable.io/users';
  constructor(private _http: HttpClient) { }

  /**
   * GET Users
   */
  getUsers() {
    // return this._http.get(this._url).map(res => res.json());
    return this._http.get<Array<User>>(this._url);
  }
}
