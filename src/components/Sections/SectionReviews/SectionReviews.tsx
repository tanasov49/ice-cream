import React, {useState, useContext} from 'react'
import './section-reviews.scss'
import {imageIceCreams, reviews} from '../../../data/data'
import Reviews from '../../UI/Reviews/Reviews'
import Dots from '../../UI/Dots/Dots'
import { IValues } from '../../../interface/model'

export default function SectionReviews() {
    const [review, setReviews] = useState(reviews)
    const [loading, setLoading] = useState(false)
    const handleClick = (index: any) => {
      setLoading((prev: boolean) => {
        return prev === index ? false : index;
      })
    }
  return (
    <section className='section-reviews'>
        <img className='section-reviews__image' src={imageIceCreams.src} alt={imageIceCreams.alt} />
        <Reviews loading={loading} review={review} />
        <div className="dots">
          {review.map((item) => 
          <Dots handleClick={handleClick} key={item.id}  item={item} />
          )}
        </div>
    </section>
  )
}
