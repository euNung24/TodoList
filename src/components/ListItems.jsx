import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import emptyCheckbox from '../icons/checkbox-empty-icon.png'
import checkbox from '../icons/checkbox-icon.png'

class ListItems extends PureComponent {
  componentDidMount() {
    this.props.setTodoList();
  }

  render() {
    const { todolists } = this.props;

    return (
      <ul>
        {todolists.map((item) => 
          <li key={item.id}>
            <img src={item.isComplete ? checkbox : emptyCheckbox } alt="" />
            {item.todo}
          </li>
        )}
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