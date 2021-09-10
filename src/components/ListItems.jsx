import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import emptyCheckbox from '../icons/checkbox-empty-icon.png'
import checkbox from '../icons/checkbox-icon.png'
import trash from '../icons/trash.png';

class ListItems extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  
  componentDidMount() {
    const { setTodoList, date } = this.props;
    setTodoList({'date': date });
  }

  setRef(ref) {
    this.ref = ref;
  }

  handleClick(itemId, todolist) {
    const { updateTodoList, date } = this.props;
    updateTodoList(itemId, { ...todolist, date: date ,isComplete: !todolist['isComplete'] });
  }

  deleteItem(itemId, date) {
    const { deleteTodoList } = this.props;
    // console.log(todolist)
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
                {/* <img src={isComplete ? checkbox : emptyCheckbox } alt="" className={isComplete ? "check" : 'uncheck'} /> */}
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
  
};

ListItems.defaultProps = {
  todolists: {},
}

export default ListItems;