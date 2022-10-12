import React from 'react'
import { Button } from 'antd'
import { StarOutlined, StarFilled } from '@ant-design/icons'

const StartButton = ({ isFavorite, onClick }) => {
  const Icon = isFavorite ? StarFilled : StarOutlined
  return (
    <Button onClick={onClick} icon={<Icon />} />
  )
}

export default StartButton