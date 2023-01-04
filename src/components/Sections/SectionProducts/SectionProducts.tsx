import React from 'react'
import TitleOfSection from '../../UI/TitleOfSection/TitleOfSection'
import './section-products.scss'
import {textSection} from '../../../data/data'
import SubtitleOfSection from '../../UI/SubtitleOfSection/SubtitleOfSection'
import Product from '../../UI/Product/Product'
import {products} from '../../../data/data'
export default function SectionProducts() {
  return (
    <section className='section-products'>
        <TitleOfSection text={textSection[0]} />
        <SubtitleOfSection text={textSection[0]} />
        <div className='products'>
            {products.map((item) =>
            <Product item={item} key={item.id} />
            )}
        </div>
    </section>
  )
}
