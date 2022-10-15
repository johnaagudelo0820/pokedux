import { useEffect } from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { Col, Spin } from 'antd';
import Sercher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemons } from './api/getPokemons';
import { getPokemonsWithDetails, setLoading } from './actions/actions';

const App = () => {
  const pokemons = useSelector((state) => state.get('pokemons').toJS());
  const loading = useSelector((state) => state.get('loading'));
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemons = await getPokemons();

      dispatch(getPokemonsWithDetails(pokemons));
      dispatch(setLoading(false));
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
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
};

export default App;
