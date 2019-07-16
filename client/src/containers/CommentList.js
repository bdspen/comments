import { connect } from 'react-redux';
import { removeComment } from '../actions/comments';
import CommentList from '../components/CommentList';

// const refreshComments = (comments, filter) => {};

const mapStateToProps = state => {
  const { comments } = state;
  return { comments };
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
