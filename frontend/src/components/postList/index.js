import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddIcon from 'material-ui-icons/Add';
import DateIcon from 'material-ui-icons/Update';
import ThumbUpIcon from 'material-ui-icons/ThumbUp';
import ThumbDown from 'material-ui-icons/ThumbDown';
import Post from '../post';
import CreatePost from '../createPost';
import { PostAction } from '../../actions/post';


class PostList extends React.Component {
state = {
  save: false,
}


render() {
  const {
    posts, category, getSortByDateAscDisp, getSortByVoteAscDisp,
    getSortByVoteDescDisp, getSortByDateDescDisp,
  } = this.props;
  let postsIn = [];
  if (category !== null) {
    postsIn = posts.filter(pos => pos.category === category);
  } else {
    postsIn = posts;
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
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={getSortByDateAscDisp}
                >
                 Date Asc <DateIcon />
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={getSortByDateDescDisp}
                >
                 Date Desc <DateIcon />
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={getSortByVoteAscDisp}
                >
                  Vote Asc <ThumbUpIcon />
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={getSortByVoteDescDisp}
                >
                  Vote Desc <ThumbDown />
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
  getSortByDateAscDisp: PropTypes.func.isRequired,
  getSortByVoteAscDisp: PropTypes.func.isRequired,
  getSortByDateDescDisp: PropTypes.func.isRequired,
  getSortByVoteDescDisp: PropTypes.func.isRequired,
};

PostList.defaultProps = {
  posts: [],
  category: null,
};

function mapStateToProps({ posts }) {
  return {
    posts,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    getSortByDateAscDisp: data => dispatch(PostAction.getSortByDateAsc(data)),
    getSortByVoteAscDisp: data => dispatch(PostAction.getSortByVoteAsc(data)),
    getSortByDateDescDisp: data => dispatch(PostAction.getSortByDateDesc(data)),
    getSortByVoteDescDisp: data => dispatch(PostAction.getSortByVoteDesc(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
