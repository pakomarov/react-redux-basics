import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import cake from './cake/reducer';
import icecream from './icecream/reducer';

const rootReducer = combineReducers({
  cake,
  icecream,
});

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(logger)
));

export default store;
