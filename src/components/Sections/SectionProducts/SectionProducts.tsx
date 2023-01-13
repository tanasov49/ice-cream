import React from 'react'
import TitleOfSection from '../../UI/TitleOfSection/TitleOfSection'
import './section-products.scss'
import {textSection} from '../../../data/data'
import SubtitleOfSection from '../../UI/SubtitleOfSection/SubtitleOfSection'
import Products from '../../UI/Products/Products'
export default function SectionProducts() {
  return (
    <section className='section-products'>
        <TitleOfSection text={textSection[0]} />
        <SubtitleOfSection text={textSection[0]} />
        <Products />
    </section>
  )
}
