import React, { useEffect, useState } from 'react'
import { IValues } from '../../../interface/model'
import './header-about.scss'
import { ourCafes } from '../../../data/data'
interface ImageProps {
    imagesPage: IValues,

}
export default function HeaderAbout({imagesPage}: ImageProps) {

  return (
    <div className='header-about'>
        <img className='header-about__image' src={imagesPage.src} alt={imagesPage.title} />
        <div className="counters">
            {ourCafes.map((item, index) =>
                <div key={index} className="counter">
                    <span className="counter__counter">{item.number}</span>
                    <span className="counter__text">{item.text}</span>
                </div>
            )}
        </div>
    </div>
  )
}
