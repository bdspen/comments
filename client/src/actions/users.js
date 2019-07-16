import API from '../config/API';
import fetch from 'cross-fetch';

export const RECEIVE_USER = 'RECEIVE_USER';
export const ADD_USER = 'ADD_USER';

export const addUser = user => {
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
        dispatch(receiveUser(json));
      });
  };
};

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};
