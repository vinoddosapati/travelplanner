import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataintegrateService } from '../dataintegrate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.css']
})
export class CreatePackageComponent implements OnInit {
  packages: any;
  temp: any;
  constructor(private router: Router, private dataservice: DataintegrateService) { }

  ngOnInit() {
    // console.log('inital ' + localStorage.getItem('user'));
    // if (localStorage.getItem('user') == null || localStorage.length <= 0) {
    //   this.router.navigate(['/']);
    // }
  }

  onSubmit(it: NgForm) {
    this.temp = JSON.stringify(it.value);


    // Convert JSON array to JavaScript object
    // tslint:disable-next-line: variable-name
    const json_obj = JSON.parse(this.temp);

    // Add new key value pair "myData": "Helo World" to object
    if (localStorage.getItem('user') != null && localStorage.length > 0) {
      json_obj.uploadedby = 'vinodID';
    }
    // Convert back to JSON string
    // json_string = JSON.stringify( json_obj );
    console.log('test ' + JSON.stringify( json_obj ));

    // this.temp;
    this.dataservice.createPackage(json_obj).subscribe(data => {
      this.packages = data;
      console.log('packages upfdated ' + data);
      console.log('session in package' + localStorage.getItem('user'));
      if (data == null) {
        console.log('Error');
      } else {
        console.log('packages upfdated ' + data);
        this.router.navigate(['/package/viewAll']);
      }
    });
  }

}
