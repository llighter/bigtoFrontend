import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {AngularFireAuth} from "angularfire2/auth";
import {Observable} from "rxjs/Observable";
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-bigto-nav',
  templateUrl: './bigto-nav.component.html',
  styleUrls: ['./bigto-nav.component.css']
})
export class BigtoNavComponent implements OnInit {
  isLoggedin: boolean;
  user: Observable<firebase.User>;


  constructor(private authService: AuthService, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.user = this.afAuth.authState;
    this.user.subscribe((user: firebase.User) => {
      if (user != null ) {
        this.isLoggedin = true;
      } else {
        this.isLoggedin = false;
      }
    });
  }

  logout() {
    alert("logout");
    this.isLoggedin = false;
    this.authService.logout();
  }
}
