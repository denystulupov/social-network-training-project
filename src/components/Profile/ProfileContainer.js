import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../reducers/profile-reducer";
import * as axios from "axios";
import {withRouter} from "react-router-dom";

class ProfileContainer extends Component{

    componentDidMount() {
        this.props.setUserProfile(null);
        let userId = this.props.match.params.userId || 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return <Profile userProfile={this.props.userProfile}/>
    }
}

const mapStateToProps = state => {
    return {
        userProfile : state.profilePage.userProfile
    }
};

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer))