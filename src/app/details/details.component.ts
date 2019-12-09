import { Component, OnInit } from '@angular/core';
import { DataintegrateService } from '../dataintegrate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private router: Router, private dataservice: DataintegrateService) { }

  ngOnInit() {
    // console.log('inital ' + localStorage.getItem('user'));
    // if (localStorage.getItem('user') == null || localStorage.length <= 0) {
    //   this.router.navigate(['/']);
    // }
    console.log('package session ' + localStorage.getItem('user'));
    if (localStorage.getItem('user') == null || localStorage.length <= 0) {
      this.router.navigate(['/']);
    // tslint:disable-next-line: triple-equals
    } else if (JSON.parse((localStorage.getItem('user'))).usertype != 'USER') {
      this.router.navigate(['/']);
    }
    this.dataservice.getAllUsers().subscribe(data => {
      console.log('all users ' + JSON.stringify(data));
    });
  }

}
