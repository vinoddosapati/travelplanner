import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataintegrateService } from '../dataintegrate.service';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-viewtrip',
  templateUrl: './viewtrip.component.html',
  styleUrls: ['./viewtrip.component.css']
})
export class ViewtripComponent implements OnInit {
  @ViewChild('content', { static: true }) content: ElementRef;
  selectedPackage: any;

  constructor(private router: Router, private dataservice: DataintegrateService) { }
  there: any;

  ngOnInit() {
    // tslint:disable-next-line: triple-equals
    if (localStorage.length > 0 && (localStorage.getItem('package') != null || localStorage.getItem('package') != undefined )) {
      const packageID = localStorage.getItem('package');
      console.log('package id ' + packageID);
      this.there = true;
      this.getPackagebyPackageId(packageID);
    // tslint:disable-next-line: max-line-length
    // } else if (localStorage.length > 0 && (localStorage.getItem('userpackage') != null || localStorage.getItem('userpackage') != undefined )) {
    //   const packageID = localStorage.getItem('userpackage');
    //   console.log('package id ' + packageID);
    //   this.there = true;
    //   this.getUserPackagebyPackageId(packageID);
    // }
    }else {
      this.there = false;
      console.log('missing package');
    }
  }

  isPackageThere() {
    if (this.there) {
      return true;
    }
    return false;
  }

  getPackagebyPackageId(packageID: any) {
    this.dataservice.getPackageByPackageID(packageID).subscribe(packagebyid => {
      this.selectedPackage = packagebyid;
    });
    localStorage.removeItem('package');
  }

  downloadPDF() {
    let doc = new jsPDF();

    let specialElementHandler = {
      '#editor': function(element, renderer) {
        return true;
      }
    };

    let content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementHandler
    });

    doc.save(this.selectedPackage.packageName+'.pdf');
  }

  // getUserPackagebyPackageId(packageID: any) {
  //   this.dataservice.getUserPackageByPackageID(packageID).subscribe(packagebyid => {
  //     this.selectedPackage = packagebyid;
  //   });
  //   localStorage.removeItem('userpackage');
  // }

}
