import React from 'react';
import PropTypes from 'prop-types';
import { MDBListGroupItem, MDBIcon } from 'mdbreact';

const Comment = ({ comment, onClick }) => (
  <MDBListGroupItem>
    <div className="d-flex justify-content-between">
      {comment}
      <MDBIcon icon="trash-alt" style={{ color: 'red' }} onClick={onClick} />
    </div>
  </MDBListGroupItem>
);

Comment.propTypes = {
  onClick: PropTypes.func.isRequired,
  userId: PropTypes.number,
  comment: PropTypes.string.isRequired
};

export default Comment;
