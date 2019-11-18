import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import listsReducer from './lists/listsReducer';

const rootReducer = combineReducers({
  lists: listsReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
