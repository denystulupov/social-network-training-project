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
                ...action.data,
                isAuth: true
            }
        }
        default: return state
    }
};

export const setAuthUserData = (id, login, email) => ({type: SET_AUTH_USER_DATA, data: {id, login, email}});

export const getAuthUserData = () => dispatch => {
    authApi.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, login, email))
            }
        })
};

export default authReducer