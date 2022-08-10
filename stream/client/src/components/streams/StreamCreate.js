import React from "react";
import {connect} from "react-redux";
import {createStream} from "../../actions";
import {useNavigate} from "react-router-dom";
import StreamForm from "./StreamForm";

let StreamCreate = (props) => {
    const navigate = useNavigate();

    const onSubmit = async (formValues) => {
        await props.createStream(formValues);
        navigate('/streams');
    }

    return (
        <div>
            <h4>Create New Stream</h4>
            <StreamForm onSubmit={onSubmit}/>
        </div>
    )
}

StreamCreate = connect(null, {createStream})(StreamCreate);

export default StreamCreate;