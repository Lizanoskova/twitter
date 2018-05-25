import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Switch, Route } from 'react-router-dom';

import App from './components/App.jsx';
import initStore from './utils/store.jsx';

  const history = createHistory();
  const middleware = routerMiddleware(history);

ReactDOM.render(
    <Provider store={ initStore() }>
        <ConnectedRouter history={ history }>
            <div>
                <App />
            </div>
        </ConnectedRouter>
    </Provider>,
document.getElementById('root'));