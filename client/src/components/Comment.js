import React from 'react';
import PropTypes from 'prop-types';
import { MDBListGroupItem, MDBIcon } from 'mdbreact';

const Comment = ({ removeComment, comment }) => (
  <MDBListGroupItem>
    <div className="d-flex justify-content-between">
      {comment}
      <MDBIcon
        icon="trash-alt"
        style={{ color: 'red' }}
        onClick={removeComment}
      />
    </div>
  </MDBListGroupItem>
);

Comment.propTypes = {
  onClick: PropTypes.func.isRequired,
  removeComment: PropTypes.func.isRequired,
  userId: PropTypes.number,
  comment: PropTypes.string.isRequired
};

export default Comment;
