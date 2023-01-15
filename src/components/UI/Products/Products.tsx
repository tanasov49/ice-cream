import React, {useState, useContext} from 'react'
import './product.scss'
import {products} from '../../../data/data'
import ArrowSVG from '../../../images/arrow.svg'
import {ModalContext} from '../../../context/ModalContext'
export default function Products() {
const {handleProductClick} = useContext(ModalContext)
  return (
    <div className='products'>
        {products.map((item, key) =>
            <div key={item.id} className='product' style={{backgroundColor: item.bcgColor}}>
              <div className={`product__image ${item.class}`} style={{backgroundColor: item.bcgColor}}>
                  <img src={item.src} alt={`photo ${item.title}`} />
              </div>
              <h4 className='product__title'>{item.title}</h4>
              <p className='product__text'>{item.text}</p>
              <button onClick={() => handleProductClick(key)} className='product__open'>
                <ArrowSVG />
              </button>
              </div>
        )}
    </div>

  )
}
