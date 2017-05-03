import {LOAD_COURSES_SUCCESS} from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(course) {
  return {
    type: LOAD_COURSES_SUCCESS,
    course
  }
}

export function loadCourses() {
  return function(dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    })
  }
}