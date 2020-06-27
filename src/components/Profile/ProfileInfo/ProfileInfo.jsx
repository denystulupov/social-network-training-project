import React from 'react';
// import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = props => {

    let defaultPhoto = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPlIx87uSfC0syODZ73wKtwbo57Nu3WFfJXw&usqp=CAU"

    return (
        <div>
            <div>
                <img src={props.userProfile.photos.large || defaultPhoto} alt=""/>
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
};

export default ProfileInfo;