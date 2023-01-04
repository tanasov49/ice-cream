import React from 'react'
import { IValues } from '../../../interface/model'
import './product.scss'
interface PropsProduct {
  item: IValues,
  key: any
}
export default function Products({item}: PropsProduct) {
  
  return (
    <div key={item.id} className='product' style={{backgroundColor: item.bcgColor}}>
      <div className={`product__image ${item.class}`} style={{backgroundColor: item.bcgColor}}>
      <img   src={item.src} alt={`photo ${item.title}`} />
      </div>
      <h4 className='product__title'>{item.title}</h4>
      <p className='product__text'>{item.text}</p>
      <a className='product__link' href={item.url}><span></span></a>
    </div>
  )
}
