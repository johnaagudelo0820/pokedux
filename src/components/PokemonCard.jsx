import React from 'react'
import { Card} from 'antd' 
import Meta from 'antd/lib/card/Meta'
import { StarOutlined } from '@ant-design/icons'

export const PokemonCard = ({ name }) => {
  return (
    <Card
        title={name}
        cover={<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png' alt='Dito' />}
        extra={<StarOutlined />}
    >
        <Meta description="fire, magig" />
    </Card>
  )
}
