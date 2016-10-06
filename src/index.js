import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Router from 'react-router/BrowserRouter'
import Match from 'react-router/Match'
import Miss from 'react-router/Miss'
// import Immutable from 'immutable';

// var installDevTools = require("immutable-devtools");
// installDevTools(Immutable);

import HomeContainer from './containers/HomeContainer.js';
import NotFound from './components/NotFound.js'
import configureStore from './store/store.js';
var store = configureStore();

render((
  <Provider store={store}>
    <Router>
      <div>
        <Match pattern='/' component={HomeContainer}/>
        <Miss component={NotFound} />
      </div>
    </Router>
  </Provider>
), document.getElementById('root'));
