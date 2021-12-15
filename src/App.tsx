import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import UseScrollTop from './utils/customHooks/ScrollTop';
import listLink from './common/Nav/listOfLink';
import Nav from './common/Nav';
import Main from './common/Main';
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.scss';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">

          <Router>
            <UseScrollTop />
            <Nav link={listLink} />
            <Main />
          </Router>

        </header>
      </div>
    </Provider>
  );
}

export default App;
