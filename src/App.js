import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import NewCakeContainer from './components/NewCakeContainer';
import HooksIcecreamContainer from './components/HooksIcecreamContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <HooksIcecreamContainer />
        <NewCakeContainer />
        <ItemContainer cake />
        <ItemContainer />
      </div>
    </Provider>
  );
}

export default App;
