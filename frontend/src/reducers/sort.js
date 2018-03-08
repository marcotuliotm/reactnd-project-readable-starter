import {
  SORT_BY_DATE_DESC,
  SORT_BY_VOTE_DESC,
  SORT_BY_DATE_ASC,
  SORT_BY_VOTE_ASC,
} from './../actions/constants';


const sort = (state = [], action) => {
  switch (action.type) {
    case SORT_BY_DATE_ASC:
      return SORT_BY_DATE_ASC;
    case SORT_BY_VOTE_ASC:
      return SORT_BY_VOTE_ASC;
    case SORT_BY_DATE_DESC:
      return SORT_BY_DATE_DESC;
    case SORT_BY_VOTE_DESC:
      return SORT_BY_VOTE_DESC;
    default:
      return state;
  }
};


export default sort;
