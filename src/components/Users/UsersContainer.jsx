// import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, setUsersCountAC, unfollowAC} from "../../reducers/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        usersCount: state.usersPage.usersCount,
        pageSize: state.usersPage.pageSize
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: currentPage => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setUsersCount: usersCount => {
            dispatch(setUsersCountAC(usersCount))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);