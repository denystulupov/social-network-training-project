import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../reducers/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends Component{

    componentDidMount() {
        let userId = this.props.match.params.userId || 2;
        this.props.getUserProfile(userId)
    }

    render() {
        return <Profile userProfile={this.props.userProfile}/>
    }
}

const mapStateToProps = state => {
    console.log('connect')
    return {
        userProfile: state.profilePage.userProfile
    }
};

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withAuthRedirect,
    withRouter
    )(ProfileContainer)