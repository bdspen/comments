import { connect } from 'react-redux';
import { addComment, addCommentWithNewUserData } from '../actions/comments';
import { updateForm } from '../actions/commentForm';
import AddComment from '../components/AddComment';
import { pathOr } from 'ramda';

const mapStateToProps = state => {
  const { user, commentForm } = state;
  return { userId: pathOr(null, ['user', 'id'], user), form: commentForm.form };
};

const mapDispatchToProps = dispatch => {
  return {
    addCommentWithNewUserData: (user, comment) =>
      dispatch(addCommentWithNewUserData(user, comment)),
    addComment: comment => dispatch(addComment(comment)),
    onHandleChange(event) {
      dispatch(updateForm({ [event.target.name]: event.target.value }));
    },
    updateForm
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddComment);
