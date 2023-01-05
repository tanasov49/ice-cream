import React from 'react'
import { IValues } from '../../../../interface/model'
import './review.scss'
interface PropsReview {
    item: IValues,
    slideIndex: number,
    index: number
}
export default function Review({item, slideIndex, index}: PropsReview) {
  
  return (
    <div key={item.id} className={slideIndex === index + 1 ? 'review review_active' : 'review'}>
        <img className='review__image' src={item.src} alt={item.title} />
        <p className="review__text">{item.text}</p>
        <h5 className="review__title">{item.title}</h5>
    </div>
  )
}
