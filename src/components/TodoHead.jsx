import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TodoHead extends PureComponent {
  render() {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() > 9 ? new Date().getMonth() : '0' + new Date().getMonth();
    const date =   new Date().getDate() > 9 ? new Date().getDate() : '0' + new Date().getDate();

    return (
      <div>
        <h2>To Do List</h2>
        <span>{year}/{month}/{date}</span>
      </div>
    );
  }
}

TodoHead.propTypes = {

};

export default TodoHead;