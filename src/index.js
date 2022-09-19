import React from 'react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { pokemonReducer } from './reducers/pokemons';

const store = createStore(pokemonReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
