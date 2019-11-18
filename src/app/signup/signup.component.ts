import { Component, OnInit } from '@angular/core';
import { DataintegrateService } from '../dataintegrate.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private dataService: DataintegrateService) { }

  ngOnInit() {
  }

  signUp() {

  }

}
