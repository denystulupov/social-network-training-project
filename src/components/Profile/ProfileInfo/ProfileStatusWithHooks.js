import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {
                editMode
                    ? <div>
                        <input
                            onBlur={deactivateEditMode} autoFocus type="text"
                            onChange={onStatusChange} value={status}/>
                    </div>
                    : <div>
                        <span onDoubleClick={activateEditMode}>{props.status || "status"}</span>
                    </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;