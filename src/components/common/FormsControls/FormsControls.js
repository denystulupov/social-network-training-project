import React from "react";
import classes from './FormsControls.module.css'

const FormControls = ({meta, children}) => {
    let hasError = meta.touched && meta.error;
    return(
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
};

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControls {...props}><textarea {...input} {...restProps}/></FormControls>
};

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControls {...props}><input {...input} {...restProps}/></FormControls>
};
