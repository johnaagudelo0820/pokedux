import React from 'react'
import { Card} from 'antd' 
import Meta from 'antd/lib/card/Meta'
import { StarOutlined } from '@ant-design/icons'

export const PokemonCard = ({ name, image }) => {
  return (
    <Card
        title={name}
        cover={<img src={image} alt={name} />}
        extra={<StarOutlined />}
    >
        <Meta description="fire, magig" />
    </Card>
  )
}
