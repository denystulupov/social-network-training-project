import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = props => {

    return (
        <div>
            <div>
                <img
                    src={props.userProfile.photos.large} alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
};

export default ProfileInfo;