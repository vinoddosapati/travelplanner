import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataintegrateService } from '../dataintegrate.service';

@Component({
  selector: 'app-view-created-package',
  templateUrl: './view-created-package.component.html',
  styleUrls: ['./view-created-package.component.css']
})
export class ViewCreatedPackageComponent implements OnInit {
  packagesList: any;
  selectedPackage: any;
  users: any;

  constructor(private router: Router, private dataservice: DataintegrateService) { }

  ngOnInit() {
    const userId = JSON.parse((localStorage.getItem('user')))._id;
    this.dataservice.getCreatedPackages(userId).subscribe(data => {
      this.packagesList = data;
      console.log('all packages ' + JSON.stringify(data));
    });
  }

  viewPackage(packageselct: any) {
    this.selectedPackage = packageselct;
  }

  isSelected() {
    if (this.selectedPackage == null || this.selectedPackage == undefined){
      return false;
    } else {
      this.getUsers(this.selectedPackage.bookings);
      return true;
    }
  }
  getUsers(bookings: any) {
    this.users = bookings;
  }
}
