import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'bit-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public firebaseAuthentication: AngularFireAuth) { }

  ngOnInit() {
  }

  login() {
    this.firebaseAuthentication.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.firebaseAuthentication.auth.signOut();
  }

}
