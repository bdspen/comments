import React from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions';
import { MDBBtn, MDBInput } from 'mdbreact';

const AddComment = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          const { innerValue: value } = input.state;
          if (!value.trim()) {
            return;
          }
          dispatch(addComment(value));
          input.value = '';
        }}
      >
        <MDBInput
          ref={node => (input = node)}
          type="textarea"
          label="Type your Comment"
          rows="3"
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
