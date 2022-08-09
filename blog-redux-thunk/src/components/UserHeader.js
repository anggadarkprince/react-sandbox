import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchUser} from "../actions";

const UserHeader = ({userId, user, fetchUser}) => {
    useEffect(() => {
        //fetchUser(userId);
    }, [userId, fetchUser]);

    if (!user) {
        return null;
    }

    return (
        <div className="header">{user.name}</div>
    )
}

const mapStateToProps = (state, ownProp) => {
    const user = state.users.find(user => user.id === ownProp.userId);
    return {user: user}
}
const mapDispatchToProps = {
    fetchUser
}
const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(UserHeader);
