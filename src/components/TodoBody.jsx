import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ListItems from './ListItems';
import ListInput from './ListInput';
import ListItemsContiner from '../containers/ListItemsContiner';
import ListInputContainer from '../containers/ListInputContainer';

class TodoBody extends PureComponent {
  render() {
    return (
      <>
        <ListItemsContiner />
        <ListInputContainer />
      </>
    );
  }
}

TodoBody.propTypes = {

};

export default TodoBody;