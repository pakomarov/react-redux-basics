import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import cake from './cake/reducer';
import icecream from './icecream/reducer';
import user from './user/reducer';

const rootReducer = combineReducers({
  cake,
  icecream,
  user,
});

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk, logger)
));

export default store;
