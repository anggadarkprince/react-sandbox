import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchStreams} from "../../actions";
import {Link} from "react-router-dom";

let StreamList = (props) => {
    useEffect(() => {
        props.fetchStreams();
    }, []);

    const renderCreate = () => {
        if (props.isSignedIn) {
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to="/streams/new" className="ui button positive">
                        <i className="ui icon plus"/> Create Stream
                    </Link>
                </div>
            )
        }
    }

    const renderAction = (stream) => {
        if (props.isSignedIn && stream.userId === props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button small icon primary">
                        Edit
                    </Link>
                    <button className="ui button small icon negative">
                        <i className="icon trash"/>
                    </button>
                </div>
            )
        }
    }

    const renderList = () => {
        return props.streams.map(stream => (
            <div className="item" key={stream.id}>
                {renderAction(stream)}
                <i className="large middle aligned icon camera"/>

                <div className="content">
                    {stream.title}
                    <div className="description">{stream.description}</div>
                </div>
            </div>
        ));
    }

    return (
        <div>
            <div className="ui grid">
                <div className="two column row">
                    <div className="left floated column">
                        <h2>Stream List</h2>
                    </div>
                    <div className="right floated column">
                        {renderCreate()}
                    </div>
                </div>
            </div>

            <div className="ui celled list">
                {renderList()}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
}
const mapDispatchToProps = {fetchStreams};
StreamList = connect(mapStateToProps, mapDispatchToProps)(StreamList)

export default StreamList;