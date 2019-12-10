import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataintegrateService } from '../dataintegrate.service';
import { FlightsService } from '../flights.service';
import { HotelsService } from '../hotels.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-packet-create',
  templateUrl: './user-packet-create.component.html',
  styleUrls: ['./user-packet-create.component.css']
})
export class UserPacketCreateComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private dataservice: DataintegrateService, private flightService: FlightsService, private hotelService: HotelsService) { }

  ngOnInit() {
    console.log('create package session ' + localStorage.getItem('user'));
    if (localStorage.getItem('user') == null || localStorage.length <= 0) {
      this.router.navigate(['/']);
    // tslint:disable-next-line: triple-equals
    } else if (JSON.parse((localStorage.getItem('user'))).usertype != 'USER') {
      this.router.navigate(['/']);
    }
  }
}
