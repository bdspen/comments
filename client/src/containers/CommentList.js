import { connect } from 'react-redux';
import { removeComment } from '../actions/comments';
import CommentList from '../components/CommentList';
import { pathOr } from 'ramda';

const mapStateToProps = state => {
  const { comments: commentsState, user } = state;
  const userId = pathOr(false, ['user', 'id'], user);
  return { comments: commentsState.comments, userId };
};

const mapDispatchToProps = dispatch => {
  return {
    removeComment: id => dispatch(removeComment(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);
