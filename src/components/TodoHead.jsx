import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TodoBody from './TodoBody';

class TodoHead extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.date
    };
    this.clickPrev = this.clickPrev.bind(this);
    this.clickNext = this.clickNext.bind(this);
  }

  clickPrev() {
    // const { setTodoList } = this.props;
    // console.log(new Date(this.state.date), new Date(this.state.date).getDate()-1)
    this.setState(({ date }) => {  
      const inputDate = new Date(date);
      return {date:  new Date(inputDate.setDate(inputDate.getDate()-1)).toLocaleDateString()}
    }
    // {
    //   const dateArr = date.split('/');
    //   dateArr[dateArr.length - 1] = Number(dateArr[dateArr.length - 1]) - 1;
    //   dateArr[dateArr.length - 1] = dateArr[dateArr.length - 1] > 9 ? dateArr[dateArr.length - 1] : '0' +dateArr[dateArr.length - 1];
    //   return ({ date: dateArr.join('/') }); 
    // }
    // ,  () => {
    //   const date = this.state.date.split('/').join('');
    //   setTodoList({"date" : date});
    // }
    )
  }

  clickNext() {
    // const { setTodoList } = this.props;

    this.setState(({ date }) => {
      const inputDate = new Date(date);
      return {date:  new Date(inputDate.setDate(inputDate.getDate()+1)).toLocaleDateString()}
      // const dateArr = date.split('/');
      // dateArr[dateArr.length - 1] = Number(dateArr[dateArr.length - 1]) + 1;
      // dateArr[dateArr.length - 1] = dateArr[dateArr.length - 1] > 9 ? dateArr[dateArr.length - 1] : '0' +dateArr[dateArr.length - 1];
      // return ({ date: dateArr.join('/') }); 
    }
    // , () => {
    //   const date = this.state.date.split('/').join('');
    //   // setTodoList({"date" : date});
    // }
    )
  }

  render() {
    const { date } = this.state;
    const setDate = date.split('.').map(date => date > 9 ? date.trim() : `0${date.trim()}`).slice(0, 3)

    return (
      <section className="cont-todo">
        <header className='head-todo'>
          <h2>To Do List</h2>
          
          <button onClick={this.clickPrev}>◀</button>
          <span>{setDate.join('/')}</span>
          <button onClick={this.clickNext}>▶</button>
        </header>
        <TodoBody date={setDate.join('')}/>
      </section>
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