import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import trash from '../icons/trash.png';

class ListItems extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  
  componentDidMount() {
    const { setTodoList, date } = this.props;
    setTodoList({'date': date });
  }

  handleClick(itemId, todolist) {
    const { updateTodoList, date } = this.props;
    updateTodoList(itemId, { ...todolist, date: date ,isComplete: !todolist['isComplete'] });
  }

  deleteItem(itemId, date) {
    const { deleteTodoList } = this.props;
    deleteTodoList(itemId, date);
  }

  render() {
    const { todolists } = this.props;

    return (
      <ul className='list-todo'>
        {todolists.map((item) => {
          const { id, isComplete, date } = item;
          return (
            <li key={id} >
              <button className={`btn-check ${isComplete ? '' : 'empty'}`} onClick={()=>this.handleClick(id, item)}>
                {item.todo}
              </button>
              <button className="btn-remove"><img src={trash} alt=""  onClick={() => this.deleteItem(id, date)} /></button>
            </li>
          )
        })}
      </ul>
    );
  }
}

ListItems.propTypes = {
  date: PropTypes.string,
  todolists: PropTypes.array,
  setTodoList: PropTypes.func,
  updateTodoList: PropTypes.func,
  deleteTodoList: PropTypes.func,
};

ListItems.defaultProps = {
  todolists: {},
  setTodoList: () => {},
  updateTodoList: () => {},
  deleteTodoList: () => {},
}

export default ListItems;