import { Component, OnInit } from '@angular/core';
import { DataintegrateService } from '../dataintegrate.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private dataservice: DataintegrateService) { }

  ngOnInit() {
    this.dataservice.getAllUsers().subscribe(data => {
      console.log('all users ' + JSON.stringify(data));
    });
  }

}
