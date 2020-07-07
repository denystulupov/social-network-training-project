import {usersApi} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_IS_LOADING = 'SET_IS_LOADING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    currentPage: 1,
    usersCount: 0,
    pageSize: 100,
    isLoading: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS: {
            return {...state, users: action.users, isLoading: false}
        }
        case SET_USERS_COUNT: {
            return {...state, usersCount: action.usersCount}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_IS_LOADING: {
            return {...state, isLoading: action.isLoading}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: state.followingInProgress.some(id => id === action.id)
                    ? state.followingInProgress.filter(id => id !== action.id)
                    : [...state.followingInProgress, action.id]
            }
        }
        default:
            return state;
    }
};


export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setUsersCount = (usersCount) => ({type: SET_USERS_COUNT, usersCount});
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage});
export const setIsLoading = isLoading => ({type: SET_IS_LOADING, isLoading});
export const toggleIsFollowing = id => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, id});

export const requestUsers = (page, pageSize) => async dispatch => {
    dispatch(setIsLoading(true));
    dispatch(setCurrentPage(page));

    let data = await usersApi.getUsers(page, pageSize);
    dispatch(setUsers(data.items));
    dispatch(setUsersCount(data.totalCount))
};

export const followUser = (userId) => async dispatch => {
    dispatch(toggleIsFollowing(userId));
    let response = await usersApi.follow(userId);
    if (response.data.resultCode === 0) {
        dispatch(follow(userId))
    }
    dispatch(toggleIsFollowing(userId))

};

export const unfollowUser = (userId) => async dispatch => {
    dispatch(toggleIsFollowing(userId));

    let response = await usersApi.unfollow(userId);
    if (response.data.resultCode === 0) {
        dispatch(unfollow(userId))
    }
    dispatch(toggleIsFollowing(userId))
};

export default usersReducer;