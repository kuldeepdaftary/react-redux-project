import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render () {
    return (
      <div className="jumbotron">
        <h1>React Redux Project</h1>
        <p>A Simple react app to build upon, more of a testing ground</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;