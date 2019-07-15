import { connect } from 'react-redux';
import { removeComment } from '../actions';
import CommentList from '../components/CommentList';

// const refreshComments = (comments, filter) => {};

const mapStateToProps = state => {
  const { comments } = state;
  return { comments };
};

const mapDispatchToProps = dispatch => ({
  removeComment: id => dispatch(removeComment(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);
