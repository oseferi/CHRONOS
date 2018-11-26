import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bit-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  user: firebase.User;

  constructor(private authService: AuthService, private router: Router) {
    this.user = this.authService.user;
  }

  ngOnInit() {
  }

  protected logout(): void {
    if (confirm('Are you sure you want to logout?')) {
      this.authService
        .signOut()
        .then(() => this.router.navigateByUrl('/login'))
        .catch((reason: any) => alert('Error while loggout out! Reason: ' + reason));
    }
  }
}
