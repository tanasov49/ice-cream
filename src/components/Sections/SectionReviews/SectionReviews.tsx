import React, {useState, useEffect, useRef} from 'react'
import './section-reviews.scss'
import {imageIceCreams, reviews} from '../../../data/data'
import Reviews from '../../UI/Reviews/Reviews'
import Dots from '../../UI/Dots/Dots'

export default function SectionReviews() {
    const [slideIndex, setSlideIndex] = useState(1)
    const handleClick = (index: number) => {
      setSlideIndex(index)
    }
  return (
    <section className='section-reviews'>
        <img className='section-reviews__image' src={imageIceCreams.src} alt={imageIceCreams.alt} />
        <Reviews slideIndex={slideIndex} review={reviews} />
        <div className="dots">
          {reviews.map((item, index) => 
          <Dots slideIndex={slideIndex} handleClick={handleClick} key={item.id} index={index}  item={item} />
          )}
        </div>
    </section>
  )
}
