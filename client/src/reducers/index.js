import 'babel-polyfill';

import { combineReducers } from 'redux';
import comments from './comments';

export default combineReducers({
  comments
});
