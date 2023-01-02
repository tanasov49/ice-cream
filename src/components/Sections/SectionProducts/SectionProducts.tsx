import React from 'react'
import TitleOfSection from '../../UI/TitleOfSection/TitleOfSection'
import './section-products.scss'
import {titleSectionProducts} from '../../../data/data'
import SubtitleOfSection from '../../UI/SubtitleOfSection/SubtitleOfSection'
import Product from '../../UI/Product/Product'
import {products} from '../../../data/data'
export default function SectionProducts() {
  return (
    <section className='section-products'>
        <TitleOfSection text={titleSectionProducts[0]} />
        <SubtitleOfSection text={titleSectionProducts[0]} />
        <div className='products'>
            {products.map((item, key) =>
            <Product item={item} key={key} />
            )}
        </div>
    </section>
  )
}
