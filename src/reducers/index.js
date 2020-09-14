import { combineReducers } from 'redux';

import projectsReducer from './projects/projectsReducer';
import userReducer from './user/userReducer';

const reducer = combineReducers({
  projects: projectsReducer,
  user: userReducer
});

export default reducer;