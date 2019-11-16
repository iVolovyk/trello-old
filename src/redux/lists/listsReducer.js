import { actionType } from './listsActions';
// import * as listsSelectors from './listsSelectors';

const initialState = [
  {
    title: 'List Title',
    id: '1lhkhgbk',
    cards: [
      {
        id: '10lkjj',
        title: 'Example',
        description: 'Card Description'
      }
    ]
  }
];

const listsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.ADD_LIST:
      return [...state, payload];
    case actionType.ADD_CARD:
      const newState = state.map(list => {
        if (list.id === payload.listId) {
          return {
            ...list,
            cards: [...list.cards, payload.card]
          };
        } else {
          return list;
        }
      });
      return newState;
    case actionType.DRAG_CARD:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        type
      } = payload;

      if (type === 'list') {
        const newState = [...state];
        const list = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
        return newState;
      }

      // in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
        console.log(list);
        const card = list.cards.splice(droppableIndexStart, 1);
        console.log(card);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      if (droppableIdStart !== droppableIdEnd) {
        const listStart = state.find(list => droppableIdStart === list.id);

        const card = listStart.cards.splice(droppableIndexStart, 1);

        const listEnd = state.find(list => droppableIdEnd === list.id);
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }
      return [...state];
    default:
      return state;
  }
};

export default listsReducer;
