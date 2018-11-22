import * as loginActions from './login.actions';
import { UserModel } from '../../models/user.model';

export type Action = loginActions.All;

const defaultUser = new UserModel(null, 'GUEST');

export function loginReducer(state: UserModel = defaultUser, action: Action) {
    switch (action.type) {

        case loginActions.GET_USER:
            return {...state, loading: true};

        case loginActions.AUTHENTICATED:
            return {...state, ...action.payload, loading: false};

        case loginActions.NOT_AUTHENTICATED:
            return { ...state, ...defaultUser, loading: false };

        case loginActions.GOOGLE_LOGIN:
            return { ...state, loading: true };

        case loginActions.AUTH_ERROR:
            return { ...state, ...action.payload, loading: false };

        case loginActions.LOGOUT:
            return { ...state, loading: false};
    }
}

