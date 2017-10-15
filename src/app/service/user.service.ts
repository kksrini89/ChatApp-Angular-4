import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { User } from '../models/index';

@Injectable()
export class UserService {
  public _url: string = 'http://demo4842709.mockable.io/users';
  constructor(private _http: Http) { }

  /**
   * GET Users
   */
  getUsers() {
    // return this._http.get(this._url).map(res => res.json());
    return this._http.get(this._url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    // return JSON.parse(JSON.stringify(res.json() || null))
    return res || [];
    // let body = res.json();
    // console.log(body);
    // return body || [];
  }

  private handleError(err: Response) {
    return Observable.throw(err.json().error || 'Server error');
  }
}
