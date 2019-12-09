import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, SocialUser, GoogleLoginProvider } from 'angularx-social-login';
import { DataintegrateService } from '../dataintegrate.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loggedIn: boolean;
  user: SocialUser;

  constructor(private router: Router, private authService: AuthService, private dataservice: DataintegrateService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.loggedIn = (user != null);
      // localStorage.setItem('user', JSON.stringify(user));
      console.log(user);

      this.dataservice.login_google(user).subscribe(data => {
        console.log(data);
        if (data == null) {
          console.log('user not found');
          // this.router.navigate(['/signup']);
          this.dataservice.signup_google(user).subscribe(usersignup => {
            console.log('signup ' + usersignup);

            if (usersignup == null) {
              this.signOut();
              localStorage.clear();
            } else {
              localStorage.setItem('user', JSON.stringify(usersignup));
              this.router.navigate(['/package/viewAll']);
            }
          });
        } else {
          console.log('user found' + data);
          localStorage.setItem('user', JSON.stringify(data));
          this.router.navigate(['/package/viewAll']);
        }
      });

    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  findLoginType() {
    if (localStorage.getItem('user') == null || localStorage.length <= 0) {
      return 'NONE';
    // tslint:disable-next-line: triple-equals
    } else if (JSON.parse((localStorage.getItem('user'))).usertype == 'AGENT') {
      return 'AGENT';
    // tslint:disable-next-line: triple-equals
    } else if (JSON.parse((localStorage.getItem('user'))).usertype == 'ADMIN') {
      return 'ADMIN';
    // tslint:disable-next-line: triple-equals
    } else if (JSON.parse((localStorage.getItem('user'))).usertype == 'USER') {
      return 'USER';
    }
  }

  sendAdminType() {
    // tslint:disable-next-line: triple-equals
    if (this.findLoginType() == 'ADMIN') {
      return true;
    }
    return false;
  }

  sendUserType() {
    // tslint:disable-next-line: triple-equals
    if (this.findLoginType() == 'USER') {
      return true;
    }
    return false;
  }

  sendAgentType() {
    // tslint:disable-next-line: triple-equals
    if (this.findLoginType() == 'AGENT') {
      return true;
    }
    return false;
  }

  signOut(): void {
    console.log('signing out');
    this.authService.signOut();
    localStorage.clear();
    this.router.navigate(['/']);
    // tslint:disable-next-line: max-line-length
    // window.location.href = 'https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:3001/logout';
  }

  isLoggedIn() {
    if (this.loggedIn) {
      return true;
    }
    this.loggedIn = false;
    return false;
  }

  reqAgent() {
    if (this.sendUserType()) {
      this.dataservice.generateRequest().subscribe(data => {
        console.log('data of request: ' + data);
      });
    }
  }

}
