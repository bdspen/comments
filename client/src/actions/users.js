import API from '../config/API';
import fetch from 'cross-fetch';
import { addComment } from './comments';
export const RECEIVE_USER = 'RECEIVE_USER';
export const ADD_USER = 'ADD_USER';

export const addUserWithComment = (user, comment) => {
  return dispatch => {
    return fetch(API.createUser, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user })
    })
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => {
        dispatch(receiveUserWithComment(json));
        dispatch(addComment({ ...comment, userId: json.id }));
      });
  };
};

export const receiveUserWithComment = (user, comment) => {
  return {
    type: RECEIVE_USER,
    user
  };
};
