import { Component, OnInit } from '@angular/core';
import { DataintegrateService } from '../dataintegrate.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  reqUsers: any;

  constructor(private dataservice: DataintegrateService) { }

  ngOnInit() {
    this.dataservice.getRequests().subscribe(requests => {
      console.log('requested users: ' + requests);
      this.reqUsers = requests;
    });
  }

  reqApprove(reqUser: any) {
    this.updatereqUser(reqUser); // in user
    this.deletereqUser(reqUser); // in req
  }

  updatereqUser(objid: any) {
    this.dataservice.updateUserType(objid);
  }

  deletereqUser(id: any) {
    this.dataservice.deletereqUser(id);
  }

}
