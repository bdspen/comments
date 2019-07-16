import React from 'react';
import PropTypes from 'prop-types';
import { MDBListGroupItem, MDBIcon } from 'mdbreact';

const Comment = ({ comment, onClick, isMyComment }) => (
  <MDBListGroupItem>
    <div className="d-flex justify-content-between">
      {comment}
      {isMyComment ? (
        <MDBIcon icon="trash-alt" style={{ color: 'red' }} onClick={onClick} />
      ) : null}
    </div>
  </MDBListGroupItem>
);

Comment.propTypes = {
  onClick: PropTypes.func.isRequired,
  userId: PropTypes.number,
  comment: PropTypes.string.isRequired
};

export default Comment;
