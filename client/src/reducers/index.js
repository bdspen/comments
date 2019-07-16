import 'babel-polyfill';

import { combineReducers } from 'redux';
import comments from './comments';
import user from './user';
import commentForm from './commentForm';

export default combineReducers({
  comments,
  user,
  commentForm
});
