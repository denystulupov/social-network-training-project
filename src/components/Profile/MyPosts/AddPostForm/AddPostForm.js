import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

const maxLength15 = maxLength(15);

const AddPostForm = props => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostText"
                       placeholder="New Post" validate={[required, maxLength15]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

export default reduxForm({form: "newPost"})(AddPostForm)