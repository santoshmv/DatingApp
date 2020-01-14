import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, private alertyfy: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertyfy.success('logged in successfully.');
    }, error => {
      this.alertyfy.error(error);
    });
  }

  // loggedIn() {
  //   const token = localStorage.getItem('token');
  //   return !!token;
  // }
  // above is previous implementation

  loggedIn() {
    return this.authService.loggedIn();
  }


  logout() {
    localStorage.removeItem('token');
    this.alertyfy.message('Logged out');
  }
}
