import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import emptyCheckbox from '../icons/checkbox-empty-icon.png'
import { doc, setDoc } from "firebase/firestore/lite";
import { firestore } from '../firebase';


const ListInput = ({fullDate}) => {
  const [ value, setValue ] = useState('');
  const ref = useRef(null);

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(prev => value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(fullDate);
    // const { createTodoList } = this.props;
    const count = document.querySelector('.list-todo').childElementCount;
    // onCreateTodoList({id: `${fullDate}-${count}`, todo: value, isComplete: false, date: fullDate}, `${fullDate}-${count}`);
    await setDoc(doc(firestore, 'todolists', `${fullDate}-${count}`), {
      id: `${fullDate}-${count}`,
      todo: value,
      date: fullDate,
      isComplete: false,
    });
    ref.current.value = '';
  }

  return (
    <form onSubmit={handleSubmit} className='input-todo'>
      <img src={emptyCheckbox} alt="" />
      <input type="text" placeholder="추가" onChange={handleChange} ref={ref} />
      <button type="submit"></button>
    </form>
  );
}

ListInput.defaultProps ={
  value: '',
  onCreateTodoList: () => {}
}

ListInput.propTypes = {
  date: PropTypes.string,
  onCreateTodoList: PropTypes.func,
};

export default ListInput;