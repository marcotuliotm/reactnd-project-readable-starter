import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChatIcon from 'material-ui-icons/Chat';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';
import ThumbDownIcon from 'material-ui-icons/ThumbDown';
import ThumbUpIcon from 'material-ui-icons/ThumbUp';
import { NavLink } from 'react-router-dom';
import { PostAction } from '../../actions/post';


const H6 = styled.h6`
  color: #707172;
`;


const Input = styled.input`
  position: relative;
  font-size: 14px;
  height: auto;
  padding: 7px;
  margin-top: 0px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;

const DivButtons = styled.div`
  position: relative;
  right: 20px;
  bottom: 0;
  margin: 10px;
  float: right;
`;

class Post extends React.Component {
  state = {
    title: '',
    body: '',
    edit: false,

  }

  onEdit = (e) => {
    e.preventDefault();
    const postEdit = {
      title: this.state.title,
      body: this.state.body,
    };
    this.props.editPostDips(this.props.post.id, postEdit);
    this.setState({ edit: false });
  }


  setEdit = () => {
    const {
      title, body,
    } = this.props.post;
    this.setState({ title, body, edit: true });
  }


  cancelEdit = () => {
    this.setState({ edit: false });
  }


  render() {
    const {
      timestamp,
      title, body,
      author, category,
      id, commentCount,
      voteScore,
    } = this.props.post;
    const {
      deletePostDisp,
      downVotePostDips, upVotePostDips,
    } = this.props;

    const datePost = new Date(timestamp).toLocaleString();
    const text = `Category: ${category}`;

    return (
      <div className="card border-secondary mb-3" >
        <div className="card-header">{text}</div>
        <div className="card-body text-secondary">
          {this.state.edit ? (
            <form className="form-horizontal" onSubmit={this.onEdit}>
              <div className="form-group">
                <label htmlFor="inputTitle">
                  Title
                </label>
                <Input
                  required
                  value={this.state.title}
                  onChange={e =>
                    this.setState({
                      title: e.target.value,
                    })
                  }
                  type="text"
                  className="form-control"
                  id="inputTitle"
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputBody">
                  Body
                </label>
                <Input
                  required
                  value={this.state.body}
                  onChange={e =>
                    this.setState({
                      body: e.target.value,
                    })
                  }
                  type="text"
                  className="form-control"
                  id="inputBody"
                />
              </div>
              <div className="form-group">
                <DivButtons>
                  <button
                    className="btn btn-secondary"
                    style={{ marginLeft: '20px' }}
                    onClick={this.cancelEdit}
                  >
                    Cancel
                  </button>

                  <button className="btn btn-primary" >
                    Save
                  </button>
                </DivButtons>
              </div>
            </form>
          ) : (
            <div>
              <div>
                <NavLink to={`/${category}/${id}`} onClick={e => e.onSubmit()}>
                  <h5 className="card-title">{title}</h5>
                </NavLink>
                <p className="card-text">{body}</p>

                <H6>Posted by: {author} on {datePost} and   ({commentCount})  <ChatIcon />
                </H6>
                <div className="btn-group" role="group">
                  <button type="button" className="btn btn-secondary" onClick={this.setEdit}>Edit  <EditIcon /></button>
                  <button type="button" className="btn btn-secondary" onClick={() => deletePostDisp(id)}>Delete <DeleteIcon /></button>
                  <button type="button" className="btn btn-secondary" onClick={() => upVotePostDips(id)}>  <ThumbUpIcon /> Votes: {voteScore}</button>
                  <button type="button" className="btn btn-secondary" onClick={() => downVotePostDips(id)}> <ThumbDownIcon /></button>
                </div>

              </div>

            </div>
            )}

        </div>
      </div>
    );
  }
}

Post.propTypes = {
  deletePostDisp: PropTypes.func.isRequired,
  upVotePostDips: PropTypes.func.isRequired,
  downVotePostDips: PropTypes.func.isRequired,
  editPostDips: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

function mapStateToProps({ posts }) {
  return {
    posts,
  };
}

function mapDispatchToProps(dispatch) {
  return {

    deletePostDisp: data => dispatch(PostAction.deletePost(data)),
    upVotePostDips: data => dispatch(PostAction.upVotePost(data)),
    downVotePostDips: data => dispatch(PostAction.downVotePost(data)),
    editPostDips: (id, data) => dispatch(PostAction.editPost(id, data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
