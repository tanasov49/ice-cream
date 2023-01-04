import React from 'react'
import { IValues } from '../../../../interface/model'
import './review.scss'
interface PropsReview {
    item: IValues,
    loading: boolean,
    index: boolean
}
export default function Review({item, loading, index}: PropsReview) {
  
  return (
    <div key={item.id} className={loading === index ? 'review review_active' : 'review'}>
        <img className='review__image' src={item.src} alt={item.title} />
        <p className="review__text">{item.text}</p>
        <h5 className="review__title">{item.title}</h5>
    </div>
  )
}
