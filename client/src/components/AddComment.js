import React from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions/comments';
import { MDBBtn, MDBInput } from 'mdbreact';

const AddComment = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addComment(input.value));
          input.value = '';
        }}
      >
        <input
          ref={node => (input = node)}
          type="text"
          className="form-control"
          placeholder="Type your Comment"
        />

        <div className="text-center">
          <MDBBtn type="submit" color="primary">
            Add Comment
          </MDBBtn>
        </div>
      </form>
    </div>
  );
};

export default connect()(AddComment);
