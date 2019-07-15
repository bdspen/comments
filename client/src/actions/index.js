import API from '../config/API';
import fetch from 'cross-fetch';

export const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';

export const addComment = comment => {
  return dispatch => {
    dispatch(requestComments());
    return fetch(API.createComment, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ comment })
    })
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => {
        dispatch(receiveComment(json));
      });
  };
};

export const removeComment = id => ({
  type: REMOVE_COMMENT,
  id
});

export const requestComments = comments => {
  return {
    type: REQUEST_COMMENTS,
    comments
  };
};

export const receiveComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
};

export const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

export const fetchComments = () => {
  return dispatch => {
    dispatch(requestComments());
    return fetch(API.getComments)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => {
        dispatch(receiveComments(json));
      });
  };
};
