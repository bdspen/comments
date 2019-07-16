import React from 'react';
import { connect } from 'react-redux';
import { MDBBtn } from 'mdbreact';

const AddComment = ({
  form,
  addCommentWithNewUserData,
  addComment,
  updateForm,
  onHandleChange,
  userId
}) => {
  const onHandleSubmit = e => {
    e.preventDefault();
    if (!form.text) return;
    if (userId) {
      addComment({ text: form.text });
      updateForm({ text: '' });
    } else {
      if (!form.email) return;
      if (!form.name) return;
      addCommentWithNewUserData(
        {
          name: form.name,
          email: form.email
        },
        {
          text: form.text
        }
      );
      updateForm({ text: '', name: '', email: '' });
    }
  };
  return (
    <form onSubmit={onHandleSubmit}>
      <input
        onChange={e => onHandleChange(e)}
        type="text"
        name="text"
        value={form.text}
        className="form-control"
        placeholder="Type your Comment"
      />
      {!userId ? (
        <input
          onChange={e => onHandleChange(e)}
          type="text"
          name="name"
          value={form.name}
          className="form-control"
          placeholder="Name"
        />
      ) : null}
      {!userId ? (
        <input
          onChange={e => onHandleChange(e)}
          type="email"
          name="email"
          value={form.email}
          className="form-control"
          placeholder="Email Address"
        />
      ) : null}

      <div className="text-center">
        <MDBBtn type="submit" color="primary">
          Add Comment
        </MDBBtn>
      </div>
    </form>
  );
};

export default connect()(AddComment);
