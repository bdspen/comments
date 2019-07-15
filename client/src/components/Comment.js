import React from 'react';
import PropTypes from 'prop-types';

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
