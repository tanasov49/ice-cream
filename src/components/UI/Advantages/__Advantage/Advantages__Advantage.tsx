import React from 'react'
import './advantage.scss'
export default function Advantages__Advantage({item}) {
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
