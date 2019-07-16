const user = (
  state = {
    isFetching: false,
    user: null
  },
  action
) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        user: action.user
      };
    case 'RECEIVE_USER':
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        user: action.user,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
};

export default user;
