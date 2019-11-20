import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataintegrateService {

  // tslint:disable-next-line: variable-name
  constructor(private _httpClient: HttpClient) { }

  createUser(it: NgForm) {
    console.log(it);
    console.log(it.value);  // { first: '', last: '' }
    return this._httpClient.post<any>('/user/userCreate', '' , {params: it.value});
    // .subscribe(data => { data = data.status; });
  }

  loginUser(it: NgForm) {
    console.log(it);
    return this._httpClient.get<any>('/user/userSearch', {params: it.value});
  }

}
