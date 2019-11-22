import { Component, OnInit } from '@angular/core';
import { DataintegrateService } from '../dataintegrate.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  temp: any;

  constructor(private router: Router, private dataService: DataintegrateService) { }

  ngOnInit() {
  }

  signUp(Email: any) {
    console.log('----' + Email.value);
  }

  onSubmit(it: NgForm) {
    this.dataService.createUser(it).subscribe(data => {
      console.log('signup user ' + data);
      if (data == null) {
        this.router.navigate(['/signup']);
      } else {
        this.router.navigate(['/']);
      }
    });
  }

}
