import { createStore, combineReducers } from 'redux';
import cake from './cake/reducer';
import icecream from './icecream/reducer';

const rootReducer = combineReducers({
  cake,
  icecream,
});

const store = createStore(rootReducer);

export default store;
