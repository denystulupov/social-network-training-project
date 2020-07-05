import React, {Component} from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {requestUsers, followUser, unfollowUser} from '../../reducers/users-reducer';
import {
    getUsers,
    getCurrentPage,
    getUsersCount,
    getPageSize,
    getIsLoading,
    getFollowingInProgress
} from "../../reducers/users-selectors";

class UsersContainer extends Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
    };

    render() {
        return <Users
            users={this.props.users}
            currentPage={this.props.currentPage}
            usersCount={this.props.usersCount}
            pageSize={this.props.pageSize}
            isLoading={this.props.isLoading}
            followingInProgress={this.props.followingInProgress}
            onPageChange={this.onPageChange}
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        usersCount: getUsersCount(state),
        pageSize: getPageSize(state),
        isLoading: getIsLoading(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default connect(mapStateToProps,
    { followUser, unfollowUser, requestUsers})(UsersContainer);