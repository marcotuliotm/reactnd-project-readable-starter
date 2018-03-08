import {
  SORT_BY_DATE_DESC,
  SORT_BY_VOTE_DESC,
  SORT_BY_DATE_ASC,
  SORT_BY_VOTE_ASC,
} from './../actions/constants';

const sortUtil = (sort) => {
  switch (sort) {
    case SORT_BY_DATE_ASC:
      return compareTime;
    case SORT_BY_VOTE_ASC:
      return compareVoteScore;
    case SORT_BY_DATE_DESC:
      return compareTimeDesc;
    case SORT_BY_VOTE_DESC:
      return compareVoteScoreDesc;
    default:
      return compareTime;
  }
};

export default sortUtil;

function compareTime(a, b) {
  if (a.timestamp < b.timestamp) { return -1; }
  if (a.timestamp > b.timestamp) { return 1; }
  return 0;
}

function compareVoteScore(a, b) {
  if (a.voteScore < b.voteScore) { return -1; }
  if (a.voteScore > b.voteScore) { return 1; }
  return 0;
}

function compareTimeDesc(a, b) {
  if (a.timestamp < b.timestamp) { return 1; }
  if (a.timestamp > b.timestamp) { return -1; }
  return 0;
}

function compareVoteScoreDesc(a, b) {
  if (a.voteScore < b.voteScore) { return 1; }
  if (a.voteScore > b.voteScore) { return -1; }
  return 0;
}
