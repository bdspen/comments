export const FORM_UPDATED = 'FORM_UPDATED';
export const UPDATE_FORM = 'UPDATE_FORM';

export const updateForm = newFormData => {
  return {
    type: UPDATE_FORM,
    newFormData
  };
};

export const formUpdated = form => {
  return {
    type: FORM_UPDATED,
    form
  };
};
