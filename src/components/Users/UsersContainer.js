import React, {Component} from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setIsLoadingAC,
    setUsersAC,
    setUsersCountAC,
    unfollowAC
} from "../../reducers/users-reducer";
import * as axios from "axios";

class UsersContainer extends Component {

    componentDidMount() {
        this.props.setIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.setUsers(responce.data.items);
                this.props.setUsersCount(responce.data.totalCount)
            })
    }

    onPageChange = (pageNumber) => {
        this.props.setIsLoading(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.setUsers(responce.data.items);
            })
    }

    render() {
        return <Users
            users={this.props.users}
            usersCount={this.props.usersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChange={this.onPageChange}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            isLoading={this.props.isLoading}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        usersCount: state.usersPage.usersCount,
        pageSize: state.usersPage.pageSize,
        isLoading: state.usersPage.isLoading
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
        },
        setIsLoading: isLoading => {
            dispatch(setIsLoadingAC(isLoading))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);