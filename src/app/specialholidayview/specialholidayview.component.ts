import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataintegrateService } from '../dataintegrate.service';

@Component({
  selector: 'app-specialholidayview',
  templateUrl: './specialholidayview.component.html',
  styleUrls: ['./specialholidayview.component.css']
})
export class SpecialholidayviewComponent implements OnInit {
  holidaysList: any;

  constructor(private router: Router, private dataservice: DataintegrateService) { }

  ngOnInit() {
    this.dataservice.getHolidays().subscribe(allspecial => {
      this.holidaysList = allspecial;
    });
  }

  adminType() {
    // tslint:disable-next-line: triple-equals
    if (JSON.parse((localStorage.getItem('user'))).usertype == 'ADMIN') {
      return true;
    } else {
      return false;
    }
  }

  deleteHoliday(holiday: any) {
    this.dataservice.deleteHoliday(holiday._id).subscribe(holidayDeleted => {
      console.log('deleted holiday ' + holidayDeleted);
    });
  }

}
