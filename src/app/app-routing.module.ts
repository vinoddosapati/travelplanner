import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DetailsComponent } from './details/details.component';
import { PackageComponent } from './package/package.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatePackageComponent } from './create-package/create-package.component';
import { RequestComponent } from './request/request.component';
import { ViewtripComponent } from './viewtrip/viewtrip.component';
import { BookedpackageComponent } from './bookedpackage/bookedpackage.component';
import { ViewCreatedPackageComponent } from './view-created-package/view-created-package.component';
import { CreatespecialholidayComponent } from './createspecialholiday/createspecialholiday.component';
import { SpecialholidayviewComponent } from './specialholidayview/specialholidayview.component';
import { UserPacketCreateComponent } from './user-packet-create/user-packet-create.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'agentsdetails', component: PackageComponent},
  {path: 'package/create', component: CreatePackageComponent},
  {path: 'package/viewAll', component: PackageComponent},
  {path: 'user/request', component: RequestComponent},
  {path: 'package/booked', component: BookedpackageComponent},
  {path: 'package/viewcreated', component: ViewCreatedPackageComponent},
  {path: 'view/ticket', component: ViewtripComponent},
  {path: 'holiday/create', component: CreatespecialholidayComponent},
  {path: 'holiday/view', component: SpecialholidayviewComponent},
  {path: 'user/package/create', component: UserPacketCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
