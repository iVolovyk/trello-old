import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import TaskListItem from '../TaskListItem/TaskListItem';
import AddButton from '../AddButton/AddButton';
import css from './TaskList.module.css';

const TaskList = ({ id, title, cards, index }) => (
  <Draggable draggableId={id} index={index}>
    {provided => (
      <li
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        className={css.taskList}
      >
        <Droppable droppableId={id}>
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <h3>{title}</h3>
              <ul className={css.itemsList}>
                {cards.map((listItem, itemIndex) => (
                  <TaskListItem
                    key={listItem.id}
                    index={itemIndex}
                    id={listItem.id}
                    title={listItem.title}
                    description={listItem.description}
                  />
                ))}
                <AddButton listId={id} />
                {provided.placeholder}
              </ul>
            </div>
          )}
        </Droppable>
      </li>
    )}
  </Draggable>
);

TaskList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf.isRequired,
  index: PropTypes.number.isRequired,
};

export default TaskList;
