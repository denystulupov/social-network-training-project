const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_IS_LOADING = 'SET_IS_LOADING';

let initialState = {
    users: [],
    currentPage: 1,
    usersCount: 0,
    pageSize: 100,
    isLoading: false
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS: {
            return { ...state, users: action.users, isLoading: false }
        }
        case SET_USERS_COUNT: {
            return { ...state, usersCount: action.usersCount}
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
        }
        case SET_IS_LOADING: {
            return { ...state, isLoading: action.isLoading}
        }
        default:
            return state;
    }
};


export const follow = (userId) => ({type: FOLLOW, userId });
export const unfollow = (userId) => ({type: UNFOLLOW, userId });
export const setUsers = (users) => ({type: SET_USERS, users });
export const setUsersCount = (usersCount) => ({type: SET_USERS_COUNT, usersCount});
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage});
export const setIsLoading = isLoading => ({type: SET_IS_LOADING, isLoading});

export default usersReducer;