import {CREATE_STREAM, DELETE_STREAM, EDIT_STREAM, FETCH_STREAM, FETCH_STREAMS} from "../actions/types";
import _ from 'lodash';

const streamReducers = (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case FETCH_STREAM:
        case CREATE_STREAM:
        case EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_STREAM:
            return _.omit(state, action.payload)
        default:
            return state;
    }
};

export default streamReducers;