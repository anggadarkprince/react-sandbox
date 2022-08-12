import React, {useEffect, useRef} from "react";
import {connect, useSelector} from "react-redux";
import {fetchStream} from "../../actions";
import {useParams} from "react-router-dom";
import flv from 'flv.js';

let StreamShow = ({fetchStream}) => {
    const {id} = useParams();
    const stream = useSelector((state) => state.streams[id]);
    const videoRef = useRef(null);
    const player = useRef(null);

    useEffect(() => {
        if (!stream) {
            fetchStream(id);
        }

        if (!player.current && stream) {
            player.current = flv.createPlayer({
                type: 'flv',
                url: `http://localhost:8000/live/${id}.flv`
            });
            player.current.attachMediaElement(videoRef.current);
            player.current.load();
        }

        return function cleanup() {
            if (player.current) {
                player.current.pause();
                player.current.unload();
                player.current.detachMediaElement();
                player.current.destroy();
                player.current = null;
            }
        };
    }, [id, fetchStream, stream]);

    if (!stream) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <video ref={videoRef} style={{width: '100%'}} controls={true}/>
            <h1>{stream?.title}</h1>
            <h5>{stream?.description}</h5>
        </div>
    )
}

StreamShow = connect(null, {fetchStream})(StreamShow);

export default StreamShow;