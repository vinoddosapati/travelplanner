import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataintegrateService } from '../dataintegrate.service';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-bookedpackage',
  templateUrl: './bookedpackage.component.html',
  styleUrls: ['./bookedpackage.component.css']
})
export class BookedpackageComponent implements OnInit {
  @ViewChild('book', { static: true }) book: ElementRef;
  packagesList: any;
  currentPackage: any;
  userInfo: any;

  constructor(private router: Router, private dataservice: DataintegrateService) { }

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('user'));
    console.log('package session ' + localStorage.getItem('user'));
    if (localStorage.getItem('user') == null || localStorage.length <= 0) {
      this.router.navigate(['/']);
    // tslint:disable-next-line: triple-equals
    } else if (JSON.parse((localStorage.getItem('user'))).usertype == 'ADMIN') {
      this.router.navigate(['/']);
    }
    const userId = JSON.parse((localStorage.getItem('user')))._id;
    this.dataservice.getBookedPackages(userId).subscribe(data => {
      this.packagesList = data;
      console.log('all booked packages ' + JSON.stringify(data));
    });
  }

  profilePackage(packageselect: any) {
    this.currentPackage = packageselect;
  }

  isCurrentPackage() {
    if (this.currentPackage == undefined || this.currentPackage == null) {
      return false;
    } else {
      return true;
    }
  }


  downloadPDF() {
    let doc = new jsPDF();

    let specialElementHandler = {
      '#editor': function(element, renderer) {
        return true;
      }
    };

    let content = this.book.nativeElement;

    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementHandler
    });

    doc.save(this.currentPackage.packageName+'.pdf');
  }

}
