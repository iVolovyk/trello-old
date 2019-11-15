import React from 'react';
import css from './TaskListItem.module.css';
import { Draggable } from 'react-beautiful-dnd';

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

export default TaskListItem;
