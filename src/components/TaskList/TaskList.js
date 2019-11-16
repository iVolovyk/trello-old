import React from 'react';
import TaskListItem from '../TaskListItem/TaskListItem';
import AddButton from '../AddButton/AddButton';
import { Droppable, Draggable } from 'react-beautiful-dnd';
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
            </div>
          )}
        </Droppable>
      </li>
    )}
  </Draggable>
);

export default TaskList;
