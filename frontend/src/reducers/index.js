import { combineReducers } from 'redux';
import categories from './category';
import posts from './post';
import sort from './sort';


export default combineReducers({
  categories,
  posts,
  sort,
});
