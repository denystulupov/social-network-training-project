import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../reducers/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends Component{

    componentDidMount() {
        let userId = this.props.match.params.userId || 6804;
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    render() {
        return <Profile
            userProfile={this.props.userProfile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
        />
    }
}

const mapStateToProps = state => {
    return {
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status
    }
};

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withAuthRedirect,
    withRouter
    )(ProfileContainer)