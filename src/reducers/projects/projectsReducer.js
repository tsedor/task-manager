import { PROJECTS_REQUEST, PROJECTS_REQUEST_FAILURE, PROJECTS_REQUEST_SUCCESS } from './projectsActions';

const initialState = {
  request: false,
  projects: []
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECTS_REQUEST:
      return {...state, request: true}
    case PROJECTS_REQUEST_SUCCESS:
      return {...state, request: false, projects: action.payload}
    case PROJECTS_REQUEST_FAILURE:
      return {...state, request: false}
    default:
      return state;
  }
}

export default projectsReducer;