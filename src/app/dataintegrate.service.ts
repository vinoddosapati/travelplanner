import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FnParam } from '@angular/compiler/src/output/output_ast';

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

  login_google(it: any) {
    console.log('login ' + it);
    return this._httpClient.get<any>('/user/userSearch', {params: it});
  }

  signup_google(it: any) {
    console.log('signup ' + it);
    return this._httpClient.post<any>('/user/userCreate', '' , {params: it});
  }

  // request
  getAllUsers() {
    return this._httpClient.get<any>('/user/allusers');
  }


  createPackage(it: any) {
    console.log('dataservice ' + JSON.stringify(it));
    return this._httpClient.post<any>('/package/packagecreate', '', {params: it});
  }

  // createUserPackage(it: any) {
  //   console.log('dataservice ' + JSON.stringify(it));
  //   return this._httpClient.post<any>('/userpackage/pckcreate', '', {params: it});
  // }

  getAllPackages() {
    return this._httpClient.get<any>('/package/allpackages');
  }

  generateRequest() {
    return this._httpClient.post<any>('/request/generate', '', {params: JSON.parse((localStorage.getItem('user')))});
  }

  getRequests() {
    return this._httpClient.get<any>('/request/getrequests');
  }

  updateUserType(objid: any) {
    console.log('update user req in user with ' + objid);
    return this._httpClient.put<any>('user/userreqUpdate', '', {params: objid}).subscribe(updatedUser => {
      console.log('after update user info: ' + updatedUser);
    });
  }

  deletereqUser(id: any) {
    console.log('delete user reqed user with :' + id);
    return this._httpClient.delete<any>('request/deleteReq', {params: id}).subscribe(deletereq => {
      console.log('deleted user info: ' + deletereq);
    });
  }

  updatePackageUserID(jsonObj: any) {
    return this._httpClient.put<any>('/package/updateUserID', '', {params: jsonObj});
  }

  getBookedPackages(userId: any) {
    const userID = {userid: userId};
    return this._httpClient.get<any>('/package/getBooked', {params: userID});
  }

  getCreatedPackages(userId: any) {
    const userID = {userid: userId};
    return this._httpClient.get<any>('/package/getCreated', {params: userID});
  }

  deletePackage(packageID: any) {
    const packID = {packid: packageID};
    return this._httpClient.delete<any>('package/deletebyid', {params: packID});
  }

  getPackageByPackageID(packageID: any) {
    const packID = {packid: packageID};
    return this._httpClient.get<any>('package/packagebypackid', {params: packID});
  }

  // getUserPackageByPackageID(packageID: any) {
  //   const packID = {packid: packageID};
  //   return this._httpClient.get<any>('userpackage/packagebypackid', {params: packID});
  // }

  addspecialPackage(specialholiday: any) {
    console.log('data holiday : ' + JSON.stringify(specialholiday));
    return this._httpClient.post<any>('holiday/addspecial', '', {params: specialholiday});
  }

  getHolidays() {
    return this._httpClient.get<any>('holiday/getAllSpecial');
  }

  deleteHoliday(holidayId: any) {
    const holiID = {holidayid: holidayId};
    return this._httpClient.delete<any>('holiday/deleteHolidayByID', {params: holiID});
  }

}
