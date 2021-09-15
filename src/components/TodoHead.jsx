import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TodoBody from './TodoBody';

class TodoHead extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.date,
    };
    this.clickPrev = this.clickPrev.bind(this);
    this.clickNext = this.clickNext.bind(this);
  }

  clickPrev() {
    const { setTodoList } = this.props;

    this.setState(({ date }) => {
      const dateArr = date.split('/');
      dateArr[dateArr.length - 1] = Number(dateArr[dateArr.length - 1]) - 1;
      dateArr[dateArr.length - 1] = dateArr[dateArr.length - 1] > 9 ? dateArr[dateArr.length - 1] : '0' +dateArr[dateArr.length - 1];
      return ({ date: dateArr.join('/') }); 
    }, () => {
      const date = this.state.date.split('/').join('');
      setTodoList({"date" : date});
    })
  }

  clickNext() {
    const { setTodoList } = this.props;

    this.setState(({ date }) => {
      const dateArr = date.split('/');
      dateArr[dateArr.length - 1] = Number(dateArr[dateArr.length - 1]) + 1;
      dateArr[dateArr.length - 1] = dateArr[dateArr.length - 1] > 9 ? dateArr[dateArr.length - 1] : '0' +dateArr[dateArr.length - 1];
      return ({ date: dateArr.join('/') }); 
    }, () => {
      const date = this.state.date.split('/').join('');
      setTodoList({"date" : date});
    })
  }

  render() {
    const { date } = this.state;

    return (
      <>
      <header className='head-todo'>
        <h2>To Do List</h2>
        
        <button onClick={this.clickPrev}>이전</button>
        <span>{date}</span>
        <button onClick={this.clickNext}>다음</button>
      </header>
      <TodoBody date={date.split('/').join('')}/>
      </>
    );
  }
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