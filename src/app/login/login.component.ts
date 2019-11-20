import { Component, OnInit } from '@angular/core';
import { DataintegrateService } from '../dataintegrate.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(private dataservice: DataintegrateService) { }
  creds: any;
  ngOnInit() {
  }

  onSubmit(it: NgForm) {
    this.creds = JSON.stringify(it.value);
    console.log('cred ' + JSON.stringify(it.value));
    console.log('cred ' + it.value);
    this.dataservice.loginUser(it).subscribe(data => {
      console.log(data.results);
    });
  }
}
