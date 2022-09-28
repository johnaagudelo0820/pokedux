import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { pokemonReducer } from './reducers/pokemons';
// import { logger } from './middleware';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk));

const store = createStore(pokemonReducer, composedEnhancers);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
