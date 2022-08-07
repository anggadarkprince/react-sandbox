import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
    // redux thunk: make action creator return object or function
    // in this case we return a function that contains promise
    // the function accept argument dispatch() and getState()
    // redux-thunk if waiting the promise to get data and
    // call dispatch with plain-object to reducer
    return async (dispatch, getState) => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({
            type: 'FETCH_POSTS',
            payload: response
        })
    }
}

export const selectPost = () => {
    return {
        type: 'SELECT_POST'
    }
}