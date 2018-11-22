import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { UserModel } from '../../models/user.model';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';



import * as loginActions from './login.actions';
export type Action = loginActions.All;

@Injectable()
export class LoginEffects {

    constructor(private actions: Actions, private afAuth: AngularFireAuth) { }

    @Effect()
    getUser: Observable<Action> = this.actions.ofType(loginActions.GET_USER)
        .map((action: loginActions.GetUser) => this.afAuth.authState)
        .delay(2000)
        .map(authData => {
            if (authData) {
                authData.subscribe((userInfo) => {
                    const user = new UserModel(userInfo.uid, userInfo.displayName);
                    return new loginActions.Authenticated(user);
                });

            } else {
                return new loginActions.NotAuthenticated();
            }
        })
        .catch(err => Observable.of(new loginActions.AuthError()));
}