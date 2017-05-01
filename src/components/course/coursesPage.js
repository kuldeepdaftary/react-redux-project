import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      course: {
        title: null
      }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(e) {
    const course = this.state.course;
    course.title = e.target.value;
    this.setState({
      course
    });
  }

  onClickSave () {
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
        <input type="submit" onClick={this.onClickSave} value="Save" />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    courses: state.courses
  }
}

export default connect(mapStateToProps)(CoursesPage);