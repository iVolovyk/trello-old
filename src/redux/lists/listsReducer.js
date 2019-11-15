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
        description: 'Descritpion'
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
    default:
      return state;
  }
};

export default listsReducer;
