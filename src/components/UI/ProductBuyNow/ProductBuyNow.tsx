import React, {useState, useContext} from 'react'
import {ModalContext} from '../../../context/ModalContext'
import './productbuynow.scss'
interface IProduct {
    product: any,
    title: string
}
export default function ProductBuyNow({product, title}: IProduct) {
  const {handleChange, values, errors} = useContext(ModalContext)
  
  return (
    <React.Fragment>
        <h4 className="form-submit__title">{title}</h4>
        <div className="product-item">
            <div className="product-item__image">
                <img alt={product.title} src={product.src}  />
            </div>
            <div className="food-components">
                {product.foodComponents.map((item: any, key: number) => 
                <ul style={{borderColor: `${item.bcgColor}`}} key={key} className="food-component-item">
                    <li style={{background: `${item.bcgColor}`}} className='food-component-item__amount'>{item.amount}</li>
                    <li className='food-component-item__name'>{item.name}</li>
                </ul>
                )}
            </div>
            <div className="food-ingredients">
                <h4 className="food-ingredients__title">Ingredients</h4>
                {product.ingredients.map((item: any, key: number) => 
                <ul key={key} className="food-ingredient-item">
                    <li className="food-ingredient-item__name">{item.name}</li>
                    <li className="food-ingredient-item__name">{item.amount}</li>
                </ul>
                )}
            </div>
        </div>
        <input minLength={2} maxLength={20} onChange={(e) => handleChange(e)} value={values.name}  className='form-popup__input form-popup__input_name' type='text'  placeholder='Name' name='name' required  />
        <span className='form-popup__error'>{errors.name}</span>
        <input maxLength={11} onChange={(e) => handleChange(e)} value={values.phone}  className='form-popup__input form-popup__input_phone' type='tel' placeholder='Phone' name='phone' required />
        <span className='form-popup__error'>{errors.phone}</span>
        <textarea minLength={2} maxLength={50} onChange={(e) => handleChange(e)} value={values.comment} className='form-popup__text' placeholder='Comment' name='comment'></textarea>
    </React.Fragment>

  )
}
