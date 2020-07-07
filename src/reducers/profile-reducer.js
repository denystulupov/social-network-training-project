import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const  SET_STATUS = 'SET_STATUS';
const  DELETE_POST = 'DELETE_POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hello World!', likesCount: 12},
        {id: 2, message: 'Hello JavaScript!', likesCount: 11},
        {id: 3, message: 'Hello React!', likesCount: 17}
    ],
    userProfile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }
        case SET_USER_PROFILE: {
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
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        default:
            return state;
    }
};

export const addPostActionCreator = newPostText => ({type: ADD_POST, newPostText});
export const setUserProfile = userProfile => ({type: SET_USER_PROFILE, userProfile});
export const setStatus = status => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

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