import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import emptyCheckbox from '../icons/checkbox-empty-icon.png'

class ListInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.ref.focus();
  }

  setRef(ref) {
    this.ref = ref;
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState(({value: value}));
  }

  handleSubmit(e) {
    this.props.createTodoList({todo: this.state.value, isComplete: false});
    e.preventDefault();     
    this.ref.value = '';
  }

  render() {
    return (
      <>
       <form onSubmit={(e) => this.handleSubmit(e)}>
        <img src={emptyCheckbox} alt="" />
        <input type="text" placeholder="추가" onChange={(e) => this.handleChange(e)} ref={this.setRef} />
        <button type="submit">추가하기</button>
      </form>
      </>
    );
  }
}

ListInput.defaultProps ={
  value: '',
}

ListInput.propTypes = {

};

export default ListInput;