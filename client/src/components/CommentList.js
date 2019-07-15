import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = ({ comments, removeComment }) => {
  return (
    <ul>
      {comments.map(comment => (
        <Comment
          key={comment.id}
          {...comment}
          onClick={() => removeComment(comment.id)}
        />
      ))}
    </ul>
  );
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      userId: PropTypes.number,
      comment: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  removeComment: PropTypes.func.isRequired
};

export default CommentList;
