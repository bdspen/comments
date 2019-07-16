import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import { MDBListGroup } from 'mdbreact';

const CommentList = ({ comments, removeComment, userId }) => {
  return (
    <MDBListGroup>
      {comments.map(comment => {
        return (
          <Comment
            key={comment.id}
            comment={comment}
            isMyComment={comment.userId === userId}
            onClick={() => removeComment(comment.id)}
          />
        );
      })}
    </MDBListGroup>
  );
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      userId: PropTypes.number,
      email: PropTypes.string,
      name: PropTypes.string,
      comment: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  removeComment: PropTypes.func.isRequired
};

export default CommentList;
