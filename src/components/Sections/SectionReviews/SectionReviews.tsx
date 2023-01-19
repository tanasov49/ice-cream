import React, {useContext, useState} from 'react'
import './section-reviews.scss'
import {imageIceCreams, reviews} from '../../../data/data'
import Reviews from '../../UI/Reviews/Reviews'
import Dots from '../../UI/Dots/Dots'
import { ModalContext } from '../../../context/ModalContext'

export default function SectionReviews() {
   const {slideIndex,  handleClick} = useContext(ModalContext)
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
