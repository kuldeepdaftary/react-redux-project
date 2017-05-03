import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './courseList'

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  courseRow (course, index) {
    return (
      <div key={index} className="course">{course.title}</div>
    );
  }

  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  createCourses: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    courses: state.courses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);