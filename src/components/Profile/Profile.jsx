import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Spinner from "../Spinner/Spinner";

const Profile = props => {
    if(!props.userProfile) return <Spinner/>;

    return (
        <div>
            <ProfileInfo {...props} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;