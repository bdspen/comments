export const REQUEST_POSTS = 'REQUEST_POSTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';
export const addComment = text => ({
  type: 'ADD_COMMENT',
  text
});

export const removeComment = id => ({
  type: 'REMOVE_COMMENT',
  id
});

export const requestPosts = comments => {
  return {
    type: REQUEST_POSTS,
    comments
  };
};
