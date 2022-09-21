import React from 'react';
import { Provider } from 'react-redux';
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { pokemonReducer } from './reducers/pokemons';
import { featured, logger } from './middleware';

const enhancerMiddleware = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, featured)
);

const store = createStore(pokemonReducer, enhancerMiddleware);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
