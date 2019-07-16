import { connect } from 'react-redux';
import { addComment, addCommentWithNewUserData } from '../actions/comments';
import AddComment from '../components/AddComment';

const mapStateToProps = state => {
  const { userId } = state;
  return { userId };
};

const mapDispatchToProps = dispatch => {
  return {
    addCommentWithNewUserData: (user, comment) =>
      dispatch(addCommentWithNewUserData(user, comment)),
    addComment: comment => dispatch(addComment(comment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddComment);
