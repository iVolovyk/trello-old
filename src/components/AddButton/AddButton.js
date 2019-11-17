import React, { Component } from 'react';
import { Icon } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import shortid from 'shortid';
import * as listsActions from '../../redux/lists/listsActions';
import css from './AddButton.module.css';

class AddButton extends Component {
  state = { isFormOpen: false, title: '', description: '' };

  resetForm = () => {
    this.setState({ title: '', description: '' });
  };

  openFormHandler = () => {
    this.setState({ isFormOpen: true });
  };

  closeFormHandler = () => {
    this.setState({ isFormOpen: false });
    this.resetForm();
  };

  inputChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitFormHandler = e => {
    const { title, description } = this.state;
    const { addList, addCard, isList, listId } = this.props;
    e.preventDefault();
    if (!title) return;
    if (isList) {
      const newList = {
        id: shortid(),
        title,
        cards: [],
      };
      addList(newList);
      this.closeFormHandler();
    } else {
      const newCard = {
        id: shortid(),
        title,
        description,
      };
      addCard(listId, newCard);
      this.closeFormHandler();
    }
  };

  renderAddButton = () => {
    const { isList } = this.props;

    const buttonText = isList ? 'Add another list' : 'Add another card';

    // const buttonMargin = isList ? { margin: 0 } : { margin: '0 -0.5rem' };

    const buttonColor = isList
      ? { backgroundColor: '#ebecf0' }
      : { backgroundColor: 'transparent' };

    return (
      <button onClick={this.openFormHandler} style={buttonColor} type="button">
        <Icon>add</Icon>
        {buttonText}
      </button>
    );
  };

  renderForm = () => {
    const { title, description } = this.state;
    const { isList } = this.props;
    const placeholderTitle = isList
      ? 'Enter a title for list...'
      : 'Enter a title for task...';
    const buttonTitle = isList ? 'Add list' : 'Add task';
    return (
      <form className={css.form} onSubmit={this.submitFormHandler}>
        <input
          onChange={this.inputChangeHandler}
          name="title"
          placeholder={placeholderTitle}
          value={title}
        />
        {!isList && (
          <textarea
            onChange={this.inputChangeHandler}
            name="description"
            placeholder="Enter a description for task..."
            value={description}
          />
        )}
        <div style={{ display: 'flex' }}>
          <button type="submit">{buttonTitle}</button>
          <button
            onClick={this.closeFormHandler}
            className={css.closeForm}
            type="button"
          >
            <Icon>close</Icon>
          </button>
        </div>
      </form>
    );
  };

  render() {
    const { isFormOpen } = this.state;

    return (
      <li className={css.buttonWrap}>
        {isFormOpen ? this.renderForm() : this.renderAddButton()}
      </li>
    );
  }
}

// const mapStateToProps = state => ({});

const mapDispatchToProps = {
  addList: listsActions.addList,
  addCard: listsActions.addCard,
};

AddButton.propTypes = {
  addList: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired,
  isList: PropTypes.bool.isRequired,
  listId: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(AddButton);
