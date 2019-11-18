import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import css from './TaskListItem.module.css';

const TaskListItem = ({ id, title, description, index }) => (
  <Draggable draggableId={id} index={index}>
    {provided => (
      <li
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={css.item}
      >
        <h4>{title}</h4>
        <p>{description}</p>
      </li>
    )}
  </Draggable>
);

TaskListItem.defaultProps = {
  description: '',
};

TaskListItem.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default TaskListItem;
