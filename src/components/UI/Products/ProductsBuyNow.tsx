import React, {useState, useRef} from 'react'
import './product.scss'
import {products} from '../../../data/data'

export default function ProductsBuyNow() {
  // onMouseOut={() => setChecked(false)} 
  return (
    <div className='products-buy-now'>
        {products.map((item, key) => {
            const [checked, setChecked] = useState(false)

          return (
            <div id={item.title} key={item.id}  className={checked ? 'product-buy-now product-buy-now_active' : 'product-buy-now '}>
            <input defaultChecked={checked}  onChange={() => setChecked(!checked)} className='product-label__checkbox' type='checkbox' />
            <div className={`product-buy-now__image ${item.class}`}>
            <img src={item.src} alt={`photo ${item.title}`} />
            </div>
            <h4 className='product-buy-now__title'>{item.title}</h4>
            </div>
          )
        }
        )}
        </div>
    

  )
}
