import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { AngularFireModule } from '@angular/fire';
import {  AngularFireAuthModule } from '@angular/fire/auth';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';


export const firebaseConfig = {
  apiKey: 'AIzaSyAVcGFoi_F-kM1vGiCyPJ9XiZETTpJ4Gtg',
  authDomain: 'chronos-47.firebaseapp.com',
  databaseURL: 'https://chronos-47.firebaseio.com',
  projectId: 'chronos-47',
  storageBucket: 'chronos-47.appspot.com',
  messagingSenderId: '883424200025',
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    CoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,

    EffectsModule.forRoot([]),
    StoreModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
