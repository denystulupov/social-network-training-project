import React, {Component} from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import { follow, setCurrentPage, setIsLoading, setUsers, setUsersCount, unfollow } from "../../reducers/users-reducer";
import * as axios from "axios";

class UsersContainer extends Component {

    componentDidMount() {
        this.props.setIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {withCredentials: true})
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersCount(response.data.totalCount)
            })
    }

    onPageChange = (pageNumber) => {
        this.props.setIsLoading(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
            {withCredentials: true})
            .then(response => {
                this.props.setUsers(response.data.items);
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

export default connect(mapStateToProps,
    { follow, setCurrentPage, setIsLoading, setUsers, setUsersCount, unfollow})(UsersContainer);