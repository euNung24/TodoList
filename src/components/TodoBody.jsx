import React from 'react';
import PropTypes from 'prop-types';
import ListItems from './ListItems';
import ListInput from './ListInput';
import ListItemsContiner from '../containers/ListItemsContiner';
import ListInputContainer from '../containers/ListInputContainer';

const TodoBody = ({date}) => { 
  const fullDate = date.split('.').map(arr=> arr.length === 2 ? ('00' + arr.trim()).slice(-2) : arr.trim()).join('').slice(0, 8)
  // console.log();

  return (
    <div className='body-todo'>
      {/* {/* <ListItemsContiner date={date}/> */}
      <ListItems fullDate={fullDate} />
      {/* <ListInputContainer date={date} /> */}
      <ListInput fullDate={fullDate} />
    </div>
  );
}


TodoBody.propTypes = {
  date: PropTypes.string,
};

TodoBody.defaultProps = {
  date: '',
}

export default TodoBody;