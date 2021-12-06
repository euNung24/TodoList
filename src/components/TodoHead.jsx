import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoBody from './TodoBody';

const TodoHead = ({date}) => {
  const [propDate, setPropDate] = useState(date);
  const slashDate = propDate.split('.').map(arr=> arr.length === 2 ? ('00' + arr.trim()).slice(-2) : arr.trim()).join('/').slice(0, -1);

  const clickPrev = () => {
    // const { setTodoList } = this.props;
    setPropDate(prev => {
      const inputDate = new Date(prev);
      return new Date(inputDate.setDate(inputDate.getDate()-1)).toLocaleDateString()
    });
  }

  const clickNext = () => {
    // const { setTodoList } = this.props;
    setPropDate(prev => {
      const inputDate = new Date(prev);
      return new Date(inputDate.setDate(inputDate.getDate() + 1)).toLocaleDateString();
    });
  }

  return (
    <section className="cont-todo">
      <header className='head-todo'>
        <h2>To Do List</h2>
        <button onClick={clickPrev}>◀</button>
        <span>{slashDate}</span>
        <button onClick={clickNext}>▶</button>
      </header>
      <TodoBody date={propDate}/>
    </section>
  );
}

TodoHead.propTypes = {
  date: PropTypes.string,
  setTodoList: PropTypes.func
};

TodoHead.defaultProps = {
  date: '',
  setTodoList: () => {}
}

export default TodoHead;