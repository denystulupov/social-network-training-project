import React, {Component} from "react";

class ProfileStatus extends Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    activateEditMode = () =>{
        this.setState({
            editMode: true
        })
    };

    deactivateEditMode = () =>{
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    };

    onStatusChange = e => {
        this.setState({
            status: e.target.value
        })
    };

    render() {
        return (
            <>
                {
                    this.state.editMode
                        ? <div>
                            <input
                                onBlur={this.deactivateEditMode} autoFocus type="text"
                                onChange={this.onStatusChange} value={this.state.status}/>
                        </div>
                        : <div>
                            <span onDoubleClick={this.activateEditMode}>{this.props.status || "status"}</span>
                        </div>
                }
            </>
        )
    }
}

export default ProfileStatus