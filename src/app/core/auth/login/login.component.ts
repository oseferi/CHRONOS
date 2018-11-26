import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bit-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userCredential: firebase.auth.UserCredential;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService
      .signInWithGoogle()
      .then((userCredential: firebase.auth.UserCredential) => {
        this.userCredential = userCredential;
        this.router.navigateByUrl('');
      })
      .catch((reason: any) => alert('Login failed! Reason: ' + reason));
  }

  logout() {
    this.authService.signOut();
  }
}
