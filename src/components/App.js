import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import css from './App.module.css';
import TaskList from './TaskList/TaskList';
import AddButton from './AddButton/AddButton';
import * as listsSelectors from '../redux/lists/listsSelectors';
import * as listsActions from '../redux/lists/listsActions';

class App extends Component {
  onDragEnd = result => {};

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          <h2>Hello Ihor!</h2>
          <ul className={css.lists}>
            {lists.map(({ title, id, cards }) => (
              <TaskList key={id} title={title} id={id} cards={cards} />
            ))}
            <AddButton isList="true" />
          </ul>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  lists: listsSelectors.getLists(state)
});

const mapDispatchToProps = {
  dragCard: listsActions.dragCard
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
