import React from 'react';
// import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = props => {

    let defaultPhoto = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPlIx87uSfC0syODZ73wKtwbo57Nu3WFfJXw&usqp=CAU";

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div>
                <img src={props.userProfile.photos.large || defaultPhoto} alt=""/>
                <div>
                    {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                </div>
            </div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
};

export default ProfileInfo;