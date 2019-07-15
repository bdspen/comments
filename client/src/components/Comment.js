import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ removeComment, comment }) => (
  <li>
    {comment}
    <span onclick={removeComment} class="glyphicon glyphicon-trash" />
  </li>
);

Comment.propTypes = {
  onClick: PropTypes.func.isRequired,
  removeComment: PropTypes.func.isRequired,
  userId: PropTypes.number,
  comment: PropTypes.string.isRequired
};

export default Comment;
