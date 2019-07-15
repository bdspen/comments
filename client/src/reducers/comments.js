const comments = (
  state = {
    isFetching: false,
    comments: []
  },
  action
) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          id: action.id,
          comment: action.comment,
          completed: false
        }
      ];
    case 'REMOVE_COMMENT':
      return state.filter(comment => comment.id !== action.id);
    case 'REQUEST_POSTS':
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case 'RECEIVE_POSTS':
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
};

export default comments;
