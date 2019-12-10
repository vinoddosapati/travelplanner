import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataintegrateService } from '../dataintegrate.service';

@Component({
  selector: 'app-createspecialholiday',
  templateUrl: './createspecialholiday.component.html',
  styleUrls: ['./createspecialholiday.component.css']
})
export class CreatespecialholidayComponent implements OnInit {

  constructor(private router: Router, private dataservice: DataintegrateService) { }

  ngOnInit() {
    console.log('special package session ' + localStorage.getItem('user'));
    if (localStorage.getItem('user') == null || localStorage.length <= 0) {
      this.router.navigate(['/']);
    // tslint:disable-next-line: triple-equals
    } else if (JSON.parse((localStorage.getItem('user'))).usertype == 'USER') {
      this.router.navigate(['/']);
    }
  }

  onSubmit(it: NgForm) {
    this.dataservice.addspecialPackage(it.value).subscribe(special => {
      console.log('special added ' + special);
    });
  }

}
