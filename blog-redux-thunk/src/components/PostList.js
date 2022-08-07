import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../actions";

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderList() {
        return this.props.posts.map(post => {
            return <p key={post.id}>{post.title}</p>
        })
    }

    render() {
        return (
            <div>
                <div>Post List</div>
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {posts: state.posts}
}
const mapDispatchToProps = {
    fetchPosts
}
const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(PostList);
