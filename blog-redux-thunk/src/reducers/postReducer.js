export default (posts = [], action) => {
    if (action.type === 'FETCH_POSTS') {
        return action.payload.data;
    }
    return posts;
}