import React, {useState, useContext} from 'react'
import {ModalContext} from '../../../context/ModalContext'
import {products} from '../../../data/data'
import './products-buy-now.scss'
interface IProduct {
  title: string
}
export default function ProductsBuyNow({title}:IProduct ) {
  const {handleChange, values, errors} = useContext(ModalContext)
  return (
    <React.Fragment>
      <h4 className="form-submit__title">{title}</h4>
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
          <input minLength={2} maxLength={20} onChange={(e) => handleChange(e)} value={values.name}  className='form-popup__input form-popup__input_name' type='text'  placeholder='Name' name='name' required  />
        <span className='form-popup__error'>{errors.name}</span>
        <input maxLength={11} onChange={(e) => handleChange(e)} value={values.phone}  className='form-popup__input form-popup__input_phone' type='tel' placeholder='Phone' name='phone' required />
        <span className='form-popup__error'>{errors.phone}</span>
        <textarea minLength={2} maxLength={50} onChange={(e) => handleChange(e)} value={values.comment} className='form-popup__text' placeholder='Comment' name='comment'></textarea>
    </React.Fragment>

  )
}
