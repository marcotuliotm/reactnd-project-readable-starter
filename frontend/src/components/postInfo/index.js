import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AddIcon from 'material-ui-icons/Add';
import Post from '../post';
import CreatePost from '../createPost';

const H6 = styled.h6`
  color: #707172;
`;


class PostInfo extends React.Component {
state = {
  save: false,
}


render() {
  const postInfo = this.props.posts.find(pos => pos.id === this.props.match.params.id);

  if (postInfo) {
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


            <Post
              post={postInfo}
            />


          </div>
          )}

      </div>
    );
  }
  return (
    <H6>
        404 - Post not found!
    </H6>
  );
}
}

PostInfo.propTypes = {
  posts: PropTypes.array,
  match: PropTypes.object.isRequired,

};

PostInfo.defaultProps = {
  posts: [],
};

function mapStateToProps({ posts }) {
  return {
    posts,
  };
}


export default connect(mapStateToProps, undefined)(PostInfo);
