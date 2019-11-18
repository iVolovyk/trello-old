export const actionType = {
  ADD_CARD: 'ADD_CARD',
  REMOVE_CARD: 'REMOVE_CARD',
  ADD_LIST: 'ADD_LIST',
  REMOVE_LIST: 'REMOVE_LIST',
  DRAG_CARD: 'DRAG_CARD',
};

export const addList = list => ({
  type: actionType.ADD_LIST,
  payload: list,
});

export const removeList = id => ({
  type: actionType.REMOVE_LIST,
  payload: id,
});

export const addCard = (listId, card) => ({
  type: actionType.ADD_CARD,
  payload: { listId, card },
});

export const removeCard = id => ({
  type: actionType.REMOVE_CARD,
  payload: id,
});

export const dragCard = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  listType,
) => ({
  type: actionType.DRAG_CARD,
  payload: {
    droppableIdStart,
    droppableIdEnd,
    droppableIndexEnd,
    droppableIndexStart,
    listType,
  },
});
