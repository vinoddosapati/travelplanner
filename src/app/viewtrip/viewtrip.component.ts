import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewtrip',
  templateUrl: './viewtrip.component.html',
  styleUrls: ['./viewtrip.component.css']
})
export class ViewtripComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line: triple-equals
    if (localStorage.length > 0 && (localStorage.getItem('package') != null || localStorage.getItem('package') != undefined )) {
      const packageID = localStorage.getItem('package');
      console.log('package id ' + packageID);
    } else {
      console.log('missing package');
    }
  }

}
