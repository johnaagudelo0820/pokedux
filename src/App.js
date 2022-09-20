import { useEffect } from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { Col } from 'antd';
import Sercher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemons } from './api/getPokemons';
import { setPokemons as setPokemonsActions } from './actions/actions';

const App = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemons = await getPokemons();
      dispatch(setPokemonsActions(pokemons));
    };
    fetchPokemons();
  }, [dispatch]);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img
          src="https://raw.githubusercontent.com/musartedev/curso-redux/27298f5dd3e37caf2a90a7a82580cd2905fcab31/src/statics/logo.svg"
          alt="logo"
        />
      </Col>
      <Col span={8} offset={8}>
        <Sercher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
};

export default App;
