import { Component, OnInit } from '@angular/core';
import { DataintegrateService } from '../dataintegrate.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(private router: Router, private dataservice: DataintegrateService) { }
  ngOnInit() {
  }

  onSubmit(it: NgForm) {
    console.log('cred ' + JSON.stringify(it.value));
    console.log('cred ' + it.value);
    this.dataservice.loginUser(it).subscribe(data => {
      if (data == null) {
        console.log('user not found');
        this.router.navigate(['/signup']);
      } else {
        console.log('---' + data.name);
        this.router.navigate(['/details']);
      }
    });
  }
}
