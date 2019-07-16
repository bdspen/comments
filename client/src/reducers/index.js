import 'babel-polyfill';

import { combineReducers } from 'redux';
import comments from './comments';
import users from './users';

export default combineReducers({
  comments,
  users
});
