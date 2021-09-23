import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import trash from '../icons/trash.png';
import { firestore } from '../firebase';
import { collection, getDocs, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore/lite";

class ListItems extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = { todolists: [] };
  }
  
  componentDidMount() {
    // const { setTodoList, date } = this.props;
    // setTodoList({'date': date});
    this.getTodos(firestore).then(docs =>
      docs.forEach((doc, i)=> {
        // const getDate = new Date(doc.date['seconds'] * 1000);
        // const year = new Date(getDate).getFullYear();
        // const month = Number(new Date(getDate).getMonth()) + 1;
        // const date = new Date(getDate).getDate() > 9 ? new Date(getDate).getDate() : '0' + new Date(getDate).getDate();
        // const monthPlus = month > 9 ? month : '0' + month;
        this.setState(({ todolists }) => ({ todolists: [...todolists, { ...doc }]}));
      })
    );
  }

  async getTodos(db) {
    const todosCol = collection(db, 'todolists');
    const todosSnapshot = await getDocs(todosCol);
    const todoList = todosSnapshot.docs.map(doc => doc.data());
    return todoList;
  }

  async handleClick(e, itemId) {
    // const { updateTodoList, date } = this.props;
    // updateTodoList(itemId, { ...todolist, date: date ,isComplete: !todolist['isComplete'] });
    const todoRef = collection(firestore, 'todolists');
    const todoSnap = doc(todoRef, itemId);
    const todo = await getDoc(todoSnap);
    
    const bool = todo.data().isComplete;
    await updateDoc(todoSnap, { isComplete: !bool });
    
    e.target.classList.toggle('empty');
    e.target.classList.toggle('check');
  }

  async deleteItem(itemId) {
    // const { deleteTodoList } = this.props;
    // deleteTodoList(itemId, date);
    await deleteDoc(doc(firestore, 'todolists', itemId));
    window.location.reload();
  }

  render() {
    const { todolists } = this.state;
    const { date: getDate } = this.props;

    return (
      <ul className='list-todo'>
        { todolists && todolists.map((item) => {
          const { id, date, todo } = item;
          return (date===getDate) &&(
            <li key={id} >
              <button className={'btn-check empty'} onClick={(e)=>this.handleClick(e, id)}>
                {todo}
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