import {LOAD_COURSES_SUCCESS} from './actionTypes';
import CourseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  return {
    type: LOAD_COURSES_SUCCESS,
    courses
  }
}

export function loadCourses() {
  return (dispatch) => {
    return CourseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    })
  }
}