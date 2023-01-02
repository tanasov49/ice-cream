import React from 'react'
import { IValues } from '../../../../interface/model'
import './advantage.scss'
interface PropsAdvantage {
  item: IValues,
  key: number
}

export default function Advantages__Advantage({item, key}: PropsAdvantage) {
  return (
    <div key={key} className='advantage'>
      <div className="advantage__image">
        <img src={item.src} alt={item.title} />
      </div>
      <h3 className="advantage__title">{item.title}</h3>
      <p className="advantage__text">{item.text}</p>
    </div>
  )
}
