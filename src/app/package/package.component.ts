import { Component, OnInit } from '@angular/core';
import { DataintegrateService } from '../dataintegrate.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  packagesList: any;

  constructor(private router: Router, private dataservice: DataintegrateService) { }

  ngOnInit() {
    console.log('package session ' + localStorage.getItem('user'));
    if (localStorage.getItem('user') == null || localStorage.length <= 0) {
      this.router.navigate(['/']);
    // tslint:disable-next-line: triple-equals
    } else if (JSON.parse((localStorage.getItem('user'))).usertype == 'AGENT') {
      this.router.navigate(['/']);
    }
    this.dataservice.getAllPackages().subscribe(data => {
      this.packagesList = data;
      console.log('all packages ' + JSON.stringify(data));
    });
  }

  bookpackage(packageSelect: any) {
    const jsonObj = JSON.parse((localStorage.getItem('user')));
    jsonObj.packageid = packageSelect._id;
    this.dataservice.updatePackageUserID(jsonObj).subscribe(update => {
      console.log('updated package with user id' + update);
    });
    this.router.navigate(['/package/booked']);
  }

  deletepackage(packageselect: any) {
    const packageID = packageselect._id;
    console.log('delete package with id ' + packageID);
    this.dataservice.deletePackage(packageID).subscribe(data => {
      console.log('delete package ' + JSON.stringify(data));
    });
    this.router.navigate(['/package/viewAll']);
  }

  usertype() {
    // tslint:disable-next-line: triple-equals
    if (JSON.parse((localStorage.getItem('user'))).usertype == 'ADMIN') {
      return true;
    // tslint:disable-next-line: triple-equals
    } else if (JSON.parse((localStorage.getItem('user'))).usertype == 'USER') {
      return false;
    }
  }
}
