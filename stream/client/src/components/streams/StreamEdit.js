import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {connect} from "react-redux";
import {fetchStream, editStream} from "../../actions";
import StreamForm from "./StreamForm";
import _ from 'lodash';

let StreamEdit = ({fetchStream, streams}) => {
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchStream(id);
    }, [id, fetchStream]);

    const onSubmit = async (formValues) => {
        await editStream(id, formValues);
        navigate('/streams');
    }

    const stream = streams[id];

    return (
        <div>
            <h4>Edit Stream</h4>
            <StreamForm
                onSubmit={onSubmit}
                submitTitle="Update"
                initialValues={_.pick(stream, 'title', 'description')}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {streams: state.streams}
}

const mapDispatchToProps = {fetchStream, editStream}

StreamEdit = connect(mapStateToProps, mapDispatchToProps)(StreamEdit);

export default StreamEdit;