import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddIcon from 'material-ui-icons/Add';
import Comment from '../comment';
import CreateComment from '../createComment';
import { CommentAction } from '../../actions/comment';


class CommentList extends React.Component {
state = {
  save: false,
}

componentDidMount() {
  this.props.fetchAllCommentsByPost(this.props.parentId);
}

render() {
  const commentsPost = this.props.comments;

  return (
    <div>
      {this.state.save ? (
        <CreateComment
          parentId={this.props.parentId}
          onCancel={() => this.setState({ save: false })}
        />

      ) : (
        <div>
          <ul className="list-group">
            <li className="list-group-item">
              <div className="btn-group" role="group">
                Comments:

              </div>
            </li>

          </ul>

          <div>
            {commentsPost.map(comment => (
              <div key={comment.id}>
                <Comment
                  parentId={comment.parentId}
                  id={comment.id}
                  body={comment.body}
                  author={comment.author}
                  timestamp={comment.timestamp}
                  voteScore={comment.voteScore}
                />
              </div>
        ))}
          </div>

        </div>
        )}
      <ul className="list-group">
        <li className="list-group-item">
          <div className="btn-group" role="group">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.setState({ save: true })}
            >
                  New Comment  <AddIcon />
            </button>

          </div>
        </li>

      </ul>

    </div>
  );
}
}

CommentList.propTypes = {
  parentId: PropTypes.string.isRequired,
  comments: PropTypes.array,
  fetchAllCommentsByPost: PropTypes.func.isRequired,
};

CommentList.defaultProps = {
  comments: [],
};

function mapStateToProps({ posts }) {
  return {
    posts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllCommentsByPost: data => dispatch(CommentAction.getAllComments(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
