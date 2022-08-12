import React, {useEffect, useRef} from "react";
import {connect} from 'react-redux';
import {signIn, signOut} from "../actions";

const GoogleAuth = ({isSignedIn, signIn, signOut}) => {
    const auth = useRef(null);

    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '572833561614-8lcvr2ccu5vld8o86i5ebdin9v4v279m.apps.googleusercontent.com',
                scope: 'email',
                plugin_name: "streamy",
            }).then(() => {
                auth.current = window.gapi.auth2.getAuthInstance();
                const onAuthChange = (isSignedIn) => {
                    if (isSignedIn) {
                        signIn(auth.current.currentUser.get().getId());
                    } else {
                        signOut();
                    }
                }
                onAuthChange(auth.current.isSignedIn.get());
                auth.current.isSignedIn.listen(onAuthChange)
            });
        });
    }, [signIn, signOut]);

    const onSignIn = () => {
        if (auth) {
            auth.current.signIn();
        }
    }

    const onSignOut = () => {
        if (auth) {
            auth.current.signOut();
        }
    }

    const renderAuthButton = () => {
        if (isSignedIn === null) {
            return (
                <button className="ui google plus button" onClick={onSignOut}>
                    <i className="google icon"/>
                    Loading...
                </button>
            )
        } else if (isSignedIn) {
            return (
                <button className="ui red google button" onClick={onSignOut}>
                    Sign Out
                </button>
            )
        } else {
            return (
                <button className="ui negative basic google button" onClick={onSignIn}>
                    <i className="google icon"/>
                    Sign In with Google
                </button>
            )
        }
    }

    return renderAuthButton();
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}
const mapDispatchToProps = {
    signIn,
    signOut
}
const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(GoogleAuth);