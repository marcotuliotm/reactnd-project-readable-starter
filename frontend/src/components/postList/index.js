import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from 'material-ui-icons/Add';
import Post from '../post';
import CreatePost from '../createPost';


class PostList extends React.Component {
state = {
  save: false,
}


render() {
  let postsIn = [];
  if (this.props.category !== null) {
    postsIn = this.props.posts.filter(pos => pos.category === this.props.category);
  } else {
    postsIn = this.props.posts;
  }
  return (
    <div>
      {this.state.save ? (
        <CreatePost onCancel={() => this.setState({ save: false })} />
      ) : (
        <div>
          <ul className="list-group">
            <li className="list-group-item active">
              <div className="btn-group" role="group">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => this.setState({ save: true })}
                >
                  New Post  <AddIcon />
                </button>

              </div>
            </li>

          </ul>

          {postsIn.map(post => (
            <div key={post.id}>
              <Post
                post={post}
              />
            </div>
        ))}
        </div>
        )}

    </div>
  );
}
}

PostList.propTypes = {
  category: PropTypes.string,
  posts: PropTypes.array,
};

PostList.defaultProps = {
  posts: [],
  category: null,
};


export default PostList;
