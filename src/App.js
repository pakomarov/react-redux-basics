import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import NewCakeContainer from './components/NewCakeContainer';
import HooksIcecreamContainer from './components/HooksIcecreamContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <NewCakeContainer />
        <HooksIcecreamContainer />
      </div>
    </Provider>
  );
}

export default App;
