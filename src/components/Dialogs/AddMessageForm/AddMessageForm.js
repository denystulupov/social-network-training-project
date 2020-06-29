import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLength, required} from "../../../utils/validators/validators";

const maxLength50 = maxLength(50);

const AddMessageForm = props => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newMessageText'
                       placeholder='Enter your message' validate={[required, maxLength50]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};

export default reduxForm({form: "addMessageForm"})(AddMessageForm)