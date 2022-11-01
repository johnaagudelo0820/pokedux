import React from 'react'
import { Card } from 'antd' 
import Meta from 'antd/lib/card/Meta'
import StartButton from './StartButton'
import { useDispatch } from 'react-redux'
import { setFavorite } from '../slices/dataSlice'

export const PokemonCard = ({ name, image, types, id, isFavorite }) => {
  const dispatch = useDispatch()
  const typesString = types.map(elem => elem.type.name).join(', ')

  const handlerOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id}))
  }

  return (
    <Card
        title={name}
        cover={<img src={image} alt={name} />}
        extra={<StartButton isFavorite={isFavorite} onClick={handlerOnFavorite}/>}
    >
        <Meta description={typesString} />
    </Card>
  )
}
