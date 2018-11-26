import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'bit-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: firebase.User;

  constructor(private authService: AuthService) {
    this.user = this.authService.user;
  }

  ngOnInit() {
  }
}