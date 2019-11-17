import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import css from './App.module.css';
import TaskList from './TaskList/TaskList';
import AddButton from './AddButton/AddButton';
import * as listsSelectors from '../redux/lists/listsSelectors';
import * as listsActions from '../redux/lists/listsActions';

class App extends Component {
  onDragEnd = result => {
    const { dragCard } = this.props;
    const { destination, source, type } = result;
    if (!destination) {
      return;
    }
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }
    dragCard(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      type,
    );
  };

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          <h2>Hello Ihor!</h2>
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {provided => (
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={css.lists}
              >
                {lists.map(({ title, id, cards }, index) => (
                  <TaskList
                    key={id}
                    title={title}
                    id={id}
                    cards={cards}
                    index={index}
                  />
                ))}
                <AddButton isList="true" />
              </ul>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  lists: listsSelectors.getLists(state),
});

const mapDispatchToProps = {
  dragCard: listsActions.dragCard,
};

App.defaultProps = {
  lists: [],
};

App.propTypes = {
  dragCard: PropTypes.func.isRequired,
  lists: PropTypes.arrayOf(),
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
