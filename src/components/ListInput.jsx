import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import emptyCheckbox from '../icons/checkbox-empty-icon.png'
import { doc, setDoc } from "firebase/firestore/lite";
import { firestore } from '../firebase';


class ListInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: ''};
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  async handleSubmit() {
    // const { date, createTodoList } = this.props;
    // createTodoList({todo: this.state.value, isComplete: false, date: date}, date);
    const count = document.querySelector('.list-todo').childElementCount;
    const { value } = this.state;
    const { date } = this.props;

    await setDoc(doc(firestore, 'todolists', `${date}-${count}`), {
      id: `${date}-${count}`,
      todo: value,
      date: date,
      isComplete: false,
    });
    this.ref.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='input-todo'>
        <img src={emptyCheckbox} alt="" />
        <input type="text" placeholder="추가" onChange={(e) => this.handleChange(e)} ref={this.setRef} />
        <button type="submit"></button>
      </form>
    );
  }
}

ListInput.defaultProps ={
  value: '',
  createTodoList: () => {}
}

ListInput.propTypes = {
  date: PropTypes.string,
  createTodoList: PropTypes.func,
};

export default ListInput;