import { Component, OnInit } from '@angular/core';
import { DataintegrateService } from '../dataintegrate.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  temp: any;

  constructor(private dataService: DataintegrateService) { }

  ngOnInit() {
  }

  signUp(Email: any) {
    console.log('----' + Email.value);
  }

  onSubmit(it: NgForm) {
    this.dataService.createUser(it).subscribe(data => { this.temp = data.status; });
    console.log('temp value ' + this.temp);
  }

}
