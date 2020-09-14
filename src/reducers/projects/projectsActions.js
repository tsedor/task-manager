import axios from 'axios';

export const PROJECTS_REQUEST = 'PROJECTS_REQUEST';
export const PROJECTS_REQUEST_SUCCESS = 'PROJECTS_REQUEST_SUCCESS';
export const PROJECTS_REQUEST_FAILURE = 'PROJECTS_REQUEST_FAILURE';

const projectsRequestStart = () => ({
  type: PROJECTS_REQUEST
})
const projectsRequestSuccess = payload => ({
  type: PROJECTS_REQUEST_SUCCESS,
  payload
})
const projectsRequestFailure = () => ({
  type: PROJECTS_REQUEST_FAILURE
})

export const fetchProjects = () => {
  return async (dispatch) => {
    try {
      dispatch(projectsRequestStart())
      const { data } = await axios.get('./projects.json');
      dispatch(projectsRequestSuccess(data.projects))
    } catch(e) {
      dispatch(projectsRequestFailure())
    }
  }
}

export const selectProjects = state => state.projects.projects;