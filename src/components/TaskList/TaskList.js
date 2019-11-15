import React from 'react';
import TaskListItem from '../TaskListItem/TaskListItem';
import AddButton from '../AddButton/AddButton';
import { Droppable } from 'react-beautiful-dnd';
import css from './TaskList.module.css';

const TaskList = ({ id, title, cards }) => (
  <Droppable droppableId={id}>
    {provided => (
      <li
        {...provided.droppableProps}
        ref={provided.innerRef}
        className={css.taskList}
      >
        <h3>{title}</h3>
        <ul className={css.itemsList}>
          {cards.map(({ id, title, description }, index) => (
            <TaskListItem
              key={id}
              index={index}
              id={id}
              title={title}
              description={description}
            />
          ))}
          <AddButton listId={id} />
          {provided.placeholder}
        </ul>
      </li>
    )}
  </Droppable>
);

export default TaskList;
