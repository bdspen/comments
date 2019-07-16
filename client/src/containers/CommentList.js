import { connect } from 'react-redux';
import { removeComment } from '../actions/comments';
import CommentList from '../components/CommentList';
import { pathOr } from 'ramda';

const mapStateToProps = state => {
  const { comments, user } = state;
  const userId = pathOr(false, ['id'], user);
  return { comments, userId };
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
