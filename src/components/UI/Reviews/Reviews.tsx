import React from 'react'
import './reviews.scss'
import {reviews} from '../../../data/data'
import Review from './Review/Review'
import { IValues } from '../../../interface/model'
interface PropsValue {
  review: any,
  loading: boolean,
}
export default function Reviews({review, loading}: PropsValue) {
  return (
    <div className='reviews'>
        {review.map((item) => 
        <Review index={item.id} loading={loading} key={item.id} item={item} />
        )}
    </div>
  )
}
