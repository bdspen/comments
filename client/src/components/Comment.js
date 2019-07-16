import React from 'react';
import PropTypes from 'prop-types';
import { MDBListGroupItem, MDBIcon, MDBRow, MDBCol } from 'mdbreact';
import moment from 'moment';

const Comment = ({ comment, onClick, isMyComment }) => {
  console.log('comment:', comment);
  return (
    <MDBListGroupItem>
      <MDBRow>
        <MDBCol>{comment.comment}</MDBCol>
        <MDBCol />
        <MDBCol>
          {isMyComment ? (
            <MDBIcon
              className={'float-right'}
              icon="trash-alt"
              style={{ color: 'red' }}
              onClick={onClick}
            />
          ) : null}
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <div
            className={'float-right'}
            style={{ fontWeight: 'lighter', color: 'darkgrey' }}
          >
            {comment.name}
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <div
            className={'float-right'}
            style={{ fontWeight: 'lighter', color: 'darkgrey' }}
          >
            {comment.email}
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <div
            className={'float-right'}
            style={{ fontWeight: 'lighter', color: 'darkgrey' }}
          >
            {moment(comment.createdAt).format('MM/DD/YYYY hh:mma')}
          </div>
        </MDBCol>
      </MDBRow>
    </MDBListGroupItem>
  );
};

Comment.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string,
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    comment: PropTypes.string.isRequired
  }).isRequired
};

export default Comment;
