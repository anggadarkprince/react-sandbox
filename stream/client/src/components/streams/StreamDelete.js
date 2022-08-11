import React, {useEffect} from "react";
import Modal from "../Modal";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchStream, deleteStream} from "../../actions";

const StreamDelete = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const stream = useSelector((state) => state.streams[id]);
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => await dispatch(fetchStream(id)))();
    }, [id, dispatch]);

    const onDelete = async () => {
        await dispatch(deleteStream(id));
        navigate('/streams');
    }

    return (
        <Modal size="tiny" title="Delete Stream" onDismiss={() => navigate(-1)}>
            <div className="content">
                <p>Are you sure want to delete the stream <strong>{stream?.title}</strong>?</p>
            </div>
            <div className="actions">
                <div className="ui cancel button" onClick={() => navigate(-1)}>Cancel</div>
                <div className="ui button negative" onClick={onDelete}>Delete</div>
            </div>
        </Modal>
    );
}

export default StreamDelete;