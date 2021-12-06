import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import trash from '../icons/trash.png';
import { firestore } from '../firebase';
import { collection, getDocs, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore/lite";

const ListItems = ({fullDate}) => {
  const [ todolists, setTodoLists ] = useState([]);
  
  useEffect(() => {
    getTodos(firestore).then(docs => {
      setTodoLists(prev => docs)
    });
    return
  }, [])
  
  const getTodos = async (db) => {
    const todosCol = collection(db, 'todolists');
    const todosSnapshot = await getDocs(todosCol);
    const todoList = todosSnapshot.docs.map(doc => doc.data());
    return todoList;
  }

  const handleClick = async (e, itemId) => {
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

  const deleteItem = async (itemId) => {
    // const { deleteTodoList } = this.props;
    // deleteTodoList(itemId, date);
    await deleteDoc(doc(firestore, 'todolists', itemId));
    window.location.reload();
  }

  return (
    <ul className='list-todo'>
      { todolists && todolists.map((item) => {
        const { id, date, todo, isComplete } = item;
        return (date=== fullDate) && (
          <li key={id} >
            <button className={`btn-check ${isComplete ? 'check' : 'empty'}`} onClick={(e)=> handleClick(e, id)}>
              {todo}
            </button>
            <button className="btn-remove"><img src={trash} alt=""  onClick={() => deleteItem(id, date)} /></button>
          </li>
        )
      })}
    </ul>
  );
}

ListItems.propTypes = {
  date: PropTypes.string,
  todolists: PropTypes.array,
  setTodoList: PropTypes.func,
  updateTodoList: PropTypes.func,
  deleteTodoList: PropTypes.func,
};

ListItems.defaultProps = {
  todolists: [],
  setTodoList: () => {},
  updateTodoList: () => {},
  deleteTodoList: () => {},
}

export default ListItems;