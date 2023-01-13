import React, { useState, useContext, useRef, useEffect } from 'react'
import {ModalContext} from '../../../context/ModalContext'
import BuyNow from '../BuyNow/BuyNow'
import './form-popup.scss'

export default function FormPopup() {
  const {closeModal} = useContext(ModalContext)
  interface IValues {
    name: string,
    phone: string,
    comment: string,
  }
  const defaultValues:IValues = {
    name: '',
    phone: '',
    comment: '',
  }
  interface IValid {
    validName: boolean,
    validPhone: boolean
  }
  const defaultValid:IValid = {
    validName: false,
    validPhone: false
  }
  const [values, setValues] = useState(defaultValues)
  const [errors, setErrors] = useState(defaultValues)
  const [valid, setValid] = useState(defaultValid)
  const [canSubmit, setCanSubmit] = useState(false)




  const handleValidate = (name: string, value: string) => {
    const regesName = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/
    let isErrors = errors
    let {validName, validPhone} = valid
    
    if (name === 'name') {
      if(!value) {
        validName = false
        isErrors.name = 'Name is required'
      } else {
        validName = false
        isErrors.name = regesName.test(value)
        ? ''
        : 'Name is not bad'
      }
    }
    if (name === 'phone') {
      if(!value) {
        validPhone = false
        isErrors.phone = 'Phone is required'
      } else {
        validPhone = value.length > 2
        isErrors.phone = validPhone
          ? ''
          : 'Phone must be minimum 2 characters'
      }
    }
    setErrors(isErrors)
    setValid({
      validName: validName,
      validPhone: validPhone
    })
    setCanSubmit(validName && validPhone)
  }
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target
    handleValidate(name, value)
    setValues(
      {
        ...values,
        [name]: value
      },
    )

    
  }
  console.log(errors)
  return (
    <form className='form-popup' noValidate>
    <h4 className="form-submit__title">Buy now</h4>
        <BuyNow />
        <input onChange={(e) => handleChange(e)} value={values.name}  className='form-popup__input form-popup__input_name' type='text'  placeholder='Name' name='name' required  />
        <span className='form-popup__error'>{errors.name}</span>
        <input onChange={(e) => handleChange(e)} value={values.phone}  className='form-popup__input form-popup__input_phone' type='tel' placeholder='Phone' name='phone' required />
        <span className='form-popup__error'>{errors.phone}</span>
        <textarea onChange={(e) => handleChange(e)} value={values.comment} className='form-popup__text' placeholder='Comment' name='comment'></textarea>
        <button disabled={!canSubmit} className='form-popup__submit' type='submit'>Submit</button>
    </form>
  )
}
