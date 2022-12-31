import { AuthService } from './../../../shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService) { }
  loginCheck: any;
  ngOnInit(): void {
    this.loginCheck = this.auth.isLoggedIn;
    this.loggedOut();
  }


  loggedOut() {
    this.auth.SignOut();
  }
}
