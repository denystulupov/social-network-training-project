import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER__PROFILE = 'SET_USER__PROFILE';
const  SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11}
    ],
    newPostText: "",
    userProfile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER__PROFILE: {
            return {
                ...state,
                userProfile: action.userProfile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = userProfile => ({type: SET_USER__PROFILE, userProfile});
export const setStatus = status => ({type: SET_STATUS, status});

export const getUserProfile = userId => dispatch => {
    dispatch(setUserProfile(null));
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
};

export const getStatus = userId => dispatch => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
};

export const updateStatus = status => dispatch => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0){
                dispatch(setStatus(status))
            }
        })
        .catch(error => console.log(error))
};

export default profileReducer;