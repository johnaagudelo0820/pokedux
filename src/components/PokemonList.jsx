import React from 'react'
import { PokemonCard } from './PokemonCard'

import './PokemonList.css'

const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
        {pokemons?.map(pokemon => (
            <PokemonCard
              name={pokemon.name}
              key={pokemon.name}
              image={pokemon.sprites?.front_default}
              types={pokemon.types}
              id={pokemon.id}
              isFavorite={pokemon.favorite}
            />
        ))}
    </div>
  )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill('')
}

export default PokemonList