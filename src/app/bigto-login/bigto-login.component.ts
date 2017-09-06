import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {AngularFireAuth} from "angularfire2/auth";
import {Observable} from "rxjs/Observable";
import * as firebase from 'firebase/app';
import {Router} from "@angular/router";

@Component({
  selector: 'app-bigto-login',
  templateUrl: './bigto-login.component.html',
  styleUrls: ['./bigto-login.component.css']
})
export class BigtoLoginComponent implements OnInit {
  user: Observable<firebase.User>;

  constructor(private authServie: AuthService, private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.user = this.afAuth.authState;

    // 바로 안넘어가지는 문제
    this.user.subscribe((user: firebase.User) => {

      if (user != null) {
        this.router.navigate(['/home']);
        alert(user.displayName);
      }
    });
  }

  login() {
    this.authServie.login();
  }

}
