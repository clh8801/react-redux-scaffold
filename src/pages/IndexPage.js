import React, { Component } from 'react';
import { Link } from 'react-router';

export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <blockquote>Only a todo example here </blockquote>
        <Link to="/todos">GO TO TodoMVC</Link>
      </div>
    );
  }
}


