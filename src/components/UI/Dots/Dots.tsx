import React from 'react'
import { IValues } from '../../../interface/model'

import './dots.scss'
interface PropsDot {
  item: IValues,
  handleClick: (index: any) => void
}
export default function Dots({item, handleClick}: PropsDot) {
    
  return (
        <div onClick={() => handleClick(item.id)} key={item.id} className='dot'></div>
  )
}
