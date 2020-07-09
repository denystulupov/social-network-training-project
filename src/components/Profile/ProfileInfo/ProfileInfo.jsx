import React, {useState} from 'react';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import classes from "./ProfileInfo.module.css"

const ProfileInfo = props => {
    let defaultPhoto = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPlIx87uSfC0syODZ73wKtwbo57Nu3WFfJXw&usqp=CAU";

    let [editMode, setEditMode] = useState(false);

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = formData => {
        props.saveProfile(formData)
            .then(
                () => {
                    setEditMode(false)
                }
            )
    };

    return (
        <div>
            <div className={classes.profileInfo}>
                <div>
                    <img src={props.userProfile.photos.large || defaultPhoto} alt=""/>
                    <div>
                        {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                    </div>
                </div>

                <div className={classes.aboutMe}>
                    { editMode
                        ? <ProfileDataForm initialValues={props.userProfile} userProfile={props.userProfile} onSubmit={onSubmit}/>
                        : <ProfileData goToEditMode={() => {setEditMode(true)} } userProfile={props.userProfile} isOwner={props.isOwner}/>
                    }
                </div>
            </div>

            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
};

const ProfileData = ({userProfile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
        <div>
            <b>Full name</b>: {userProfile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {userProfile.lookingForAJob ? "yes" : "no"}
        </div>
        {userProfile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {userProfile.lookingForAJobDescription}
        </div>
        }

        <div>
            <b>About me</b>: {userProfile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(userProfile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={userProfile.contacts[key]}/>
        })}
        </div>
    </div>
};


const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
};

export default ProfileInfo;