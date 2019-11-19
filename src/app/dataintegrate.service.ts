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
    console.log(it.value);  // { first: '', last: '' }
    console.log(it.valid);  // false
    console.log('kjnkjmkm-----' + it.value.firstName);
    // tslint:disable-next-line: prefer-const
    let params1 = new HttpParams();
    params1.append('firstName', it.value.firstName);
    params1.append('Email', it.value.Email);
    params1.append('password', it.value.pswd);

    // console.log(params1);
    return this._httpClient.post<any>('/user/userCreate', '' , {params: it.value}).subscribe(data => {
      console.log('data === ' + data);
    });
  }
}
