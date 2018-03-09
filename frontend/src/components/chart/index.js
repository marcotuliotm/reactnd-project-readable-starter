import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  withHighcharts,
  HighchartsChart,
  Chart,
  XAxis,
  YAxis,
  Title,
  Legend,
  ColumnSeries,
  Tooltip,
} from 'react-jsx-highcharts';
import Highcharts from 'highcharts';
import AddIcon from 'material-ui-icons/Add';
import CreatePost from '../createPost';


class ChartPost extends React.Component {
  state = {
    save: false,
  }


  render() {
    const {
      posts,
    } = this.props;

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
          <HighchartsChart >
            <Chart />
            <Title>Post</Title>
            <Legend align="center" verticalAlign="bottom" itemWidth={300} />
            <XAxis type="category" labels="">
              <XAxis.Title>Category - Title</XAxis.Title>
            </XAxis>
            <YAxis id="number" >
              <YAxis.Title>Vote Score</YAxis.Title>
              {posts.map(post =>
              (<ColumnSeries
                id={post.id}
                name={`${post.category} - ${post.title}`}
                key={post.title}
                data={[post.voteScore]}
              />))}
            </YAxis>
            <Tooltip />
          </HighchartsChart>

        </div>
      )}
      </div>
    );
  }
}

ChartPost.propTypes = {
  posts: PropTypes.array,
};

ChartPost.defaultProps = {
  posts: [],
};

function mapStateToProps({ posts }) {
  return {
    posts,
  };
}


export default connect(mapStateToProps, undefined)(withHighcharts(ChartPost, Highcharts));
