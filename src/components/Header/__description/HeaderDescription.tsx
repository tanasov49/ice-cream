import React from 'react'
import { IValues } from '../../../interface/model'
import './header-description.scss'
interface ImageProps {
  imagesPage: IValues
}
export default function HeaderDescription({imagesPage}: ImageProps) {
  return (
    <div className='header-description'>
      <img className='header-description__image' src={imagesPage.src} alt={imagesPage.title} />
      <p className='header-description__text'>{imagesPage.text}</p>
      <a className='header-description__link' href={imagesPage.url}>
        <span></span>
      </a>
    </div>
  )
}
