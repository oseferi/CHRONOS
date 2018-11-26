import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class CoreModule { }
