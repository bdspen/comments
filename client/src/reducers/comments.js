const comments = (
  state = {
    isFetching: false,
    comments: []
  },
  action
) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return {
        ...state,
        comment: action.comment
      };
    case 'REMOVE_COMMENT':
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case 'REQUEST_COMMENTS':
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case 'RECEIVE_COMMENTS':
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        comments: action.comments,
        lastUpdated: action.receivedAt
      });
    case 'RECEIVE_COMMENT':
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        comments: [...state.comments, action.comment],
        lastUpdated: action.receivedAt
      });
    case 'RECEIVE_DELETED_COMMENT':
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        comments: state.comments.filter(c => c.id !== action.comment.id),
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
};

export default comments;
