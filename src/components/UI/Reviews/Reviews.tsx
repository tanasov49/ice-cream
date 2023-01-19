import React from 'react'
import './reviews.scss'
import {reviews} from '../../../data/data'
import Review from './Review/Review'

interface PropsValue {
  review: any,
  slideIndex: number,
}
export default function Reviews({review, slideIndex}: PropsValue) {
  return (
    <div className='reviews'>
        {review.map((item, index: number) => 
        <Review index={index} slideIndex={slideIndex} key={item.id} item={item} />
        )}
    </div>
  )
}
