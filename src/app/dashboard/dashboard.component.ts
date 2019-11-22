import { Component, OnInit } from '@angular/core';
import { DataintegrateService } from '../dataintegrate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usersList: any;
  constructor(private router: Router, private dataservice: DataintegrateService) { }

  ngOnInit() {
    // console.log('inital ' + localStorage.getItem('user'));
    // if (localStorage.getItem('user') == null || localStorage.length <= 0) {
    //   this.router.navigate(['/']);
    // }
    this.dataservice.getAllUsers().subscribe(data => {
      this.usersList = data;
      console.log('all users ' + JSON.stringify(data));
    });
  }

}
