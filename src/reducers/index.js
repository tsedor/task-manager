import { combineReducers } from 'redux';

import uiReducer from './ui';

const reducer = combineReducers({
  ui: uiReducer
});

export default reducer;