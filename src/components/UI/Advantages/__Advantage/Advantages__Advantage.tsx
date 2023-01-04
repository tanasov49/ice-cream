import React from 'react'
import { IValues } from '../../../../interface/model'
import './advantage.scss'
interface PropsAdvantage {
  item: IValues,
}

export default function Advantages__Advantage({item}: PropsAdvantage) {
  return (
    <div key={item.id} className='advantage'>
      <div className="advantage__image">
        <img src={item.src} alt={item.title} />
      </div>
      <h3 className="advantage__title">{item.title}</h3>
      <p className="advantage__text">{item.text}</p>
    </div>
  )
}
