import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import classes from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, userProfile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        {error && <div className={classes.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: { createField("", "lookingForAJob", [], Input, {type: "checkbox"} )}
        </div>

        <div>
            <b>My professional skills</b>:
            { createField("My professional skills", "lookingForAJobDescription", [], Textarea  )}
        </div>


        <div>
            <b>About me</b>:
            { createField("About me", "aboutMe", [], Textarea  )}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(userProfile.contacts).map(key => {
            return <div key={key}>
                <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
            </div>
        })}
        </div>
    </form>
}

export default reduxForm({form: 'edit-profile'})(ProfileDataForm);