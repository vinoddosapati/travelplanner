import { Component, OnInit } from '@angular/core';
import { DataintegrateService } from '../dataintegrate.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(private router: Router, private dataservice: DataintegrateService, private authService: AuthService) { }

  user: SocialUser;
  private loggedIn: boolean;

  ngOnInit() {
    // console.log('session ' + localStorage.getItem('user'));
    // console.log('user type ' + JSON.parse((localStorage.getItem('user'))).usertype);
    if (localStorage.length >= 0 && localStorage.getItem('user')) {
      // tslint:disable-next-line: triple-equals
      if (JSON.parse((localStorage.getItem('user'))).usertype == 'USER') {
        this.router.navigate(['/package/viewAll']);
      // tslint:disable-next-line: triple-equals
      } else if (JSON.parse((localStorage.getItem('user'))).usertype == 'AGENT') {
        this.router.navigate(['/package/viewcreated']);
      // tslint:disable-next-line: triple-equals
      } else if (JSON.parse((localStorage.getItem('user'))).usertype == 'ADMIN') {
        this.router.navigate(['/dashboard']);
      }
    } else {

    // this.authService.authState.subscribe((user) => {
    //   this.loggedIn = (user != null);
    //   // localStorage.setItem('user', JSON.stringify(user));
    //   console.log(user);

    //   this.dataservice.login_google(user).subscribe(data => {
    //     console.log(data);
    //     if (data == null) {
    //       console.log('user not found');
    //       // this.router.navigate(['/signup']);
    //       this.dataservice.signup_google(user).subscribe(usersignup => {
    //         console.log('signup ' + usersignup);

    //         if (usersignup == null) {
    //           this.signOut();
    //           localStorage.clear();
    //         } else {
    //           localStorage.setItem('user', JSON.stringify(usersignup));
    //           this.router.navigate(['/details']);
    //         }
    //       });
    //     } else {
    //       console.log('user found' + data);
    //       localStorage.setItem('user', JSON.stringify(data));
    //       this.router.navigate(['/details']);
    //     }
    //   });

    // });
  }
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    console.log('signing out');
    this.authService.signOut();
  }

  onSubmit(it: NgForm) {
    console.log('cred ' + JSON.stringify(it.value));
    console.log('cred ' + it.value);
    this.dataservice.loginUser(it).subscribe(data => {
      if (data == null) {
        console.log('user not found');
        this.router.navigate(['/signup']);
      } else {
        console.log('---' + data.name);
        // tslint:disable-next-line: triple-equals
        localStorage.setItem('user', JSON.stringify(data));
        console.log('session values1 ' + (localStorage.getItem('user')));
        console.log('session values2 ' + JSON.parse((localStorage.getItem('user'))).usertype);
        // tslint:disable-next-line: triple-equals
        if (data.usertype == 'USER') {
          this.router.navigate(['/details']);
        // tslint:disable-next-line: triple-equals
        } else if (data.usertype == 'AGENT') {
          this.router.navigate(['/agentsdetails']);
        // tslint:disable-next-line: triple-equals
        } else if (data.usertype == 'ADMIN') {
          this.router.navigate(['/dashboard']);
        }

      }
    });
  }
}
