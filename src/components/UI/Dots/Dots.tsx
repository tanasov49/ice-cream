import React from 'react'
import { IValues } from '../../../interface/model'

import './dots.scss'
interface PropsDot {
  item: IValues,
  handleClick: (index: number) => void
  index: number,
  slideIndex: number
}
export default function Dots({handleClick, index, slideIndex, item}: PropsDot) {
    
  return (
        <div key={item.id} onClick={() => handleClick(index + 1)} className={slideIndex === index + 1 ? 'dot dot_active' : 'dot'}>
        </div>
  )
}
