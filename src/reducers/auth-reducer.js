import {authApi} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return{
                ...action.payload
            }
        }
        default: return state
    }
};

export const setAuthUserData = (id, login, email, isAuth) => ({type: SET_AUTH_USER_DATA, payload: {id, login, email, isAuth}});

export const getAuthUserData = () => dispatch => {
    authApi.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, login, email, true))
            }
        })
};

export const login = (email, password, rememberMe) => dispatch => {
    authApi.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
};

export const logout = () => dispatch => {
    authApi.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
};

export default authReducer
