import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DetailsComponent } from './details/details.component';
import { PackageComponent } from './package/package.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatePackageComponent } from './create-package/create-package.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'agentsdetails', component: PackageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'package/create', component: CreatePackageComponent},
  {path: 'package/viewAll', component: PackageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
