import {
  SORT_BY_DATE_ASC,
  SORT_BY_VOTE_ASC,
  SORT_BY_DATE_DESC,
  SORT_BY_VOTE_DESC,
} from './constants';


export class SortAction {
  static getSortByDateAsc = () => (dispatch) => {
    dispatch({
      type: SORT_BY_DATE_ASC,
    });
  }
  static getSortByVoteAsc = () => (dispatch) => {
    dispatch({
      type: SORT_BY_VOTE_ASC,
    });
  }
  static getSortByDateDesc = () => (dispatch) => {
    dispatch({
      type: SORT_BY_DATE_DESC,
    });
  }
  static getSortByVoteDesc = () => (dispatch) => {
    dispatch({
      type: SORT_BY_VOTE_DESC,
    });
  }
}

export default SortAction;

