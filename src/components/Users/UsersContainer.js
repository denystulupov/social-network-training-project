import React, {Component} from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {getUsers, followUser, unfollowUser} from '../../reducers/users-reducer';

class UsersContainer extends Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        usersCount: state.usersPage.usersCount,
        pageSize: state.usersPage.pageSize,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export default connect(mapStateToProps,
    { followUser, unfollowUser, getUsers})(UsersContainer);