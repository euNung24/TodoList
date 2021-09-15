import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import ListItems from './ListItems';
// import ListInput from './ListInput';
import ListItemsContiner from '../containers/ListItemsContiner';
import ListInputContainer from '../containers/ListInputContainer';

class TodoBody extends PureComponent {

  render() {
    const { date } = this.props;

    return (
      <div className='body-todo'>
        <ListItemsContiner date={date}/>
        <ListInputContainer date={date} />
      </div>
    );
  }
}

TodoBody.propTypes = {
  date: PropTypes.string,
};

TodoBody.defaultProps = {
  date: '',
}

export default TodoBody;