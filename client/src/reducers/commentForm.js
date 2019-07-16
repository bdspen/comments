const commentForm = (
  state = {
    form: {
      text: '',
      name: '',
      email: ''
    }
  },
  action
) => {
  switch (action.type) {
    case 'FORM_UPDATED':
      return {
        ...state,
        comment: action.form
      };
    case 'UPDATE_FORM':
      return {
        ...state,
        form: {
          ...state.form,
          ...action.newFormData
        }
      };
    default:
      return state;
  }
};

export default commentForm;
