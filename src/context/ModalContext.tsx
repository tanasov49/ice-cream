import React, { createContext, useState} from "react";
interface iModalContext {
  values: any,
  errors: any,
  canSubmit: any,
  closePopup: (e) => void,
  handleSubmitBuy: (e) => void,
  handleChange: (e) => void,
  isOpenBuyPopup: boolean,
  openPopupBuy: () => void,
  handleProductClick: (product) => void,
  selectedProduct: {},
  isOpenProductPopup: boolean
}
interface IValues {
  name: string,
  phone: string | number,
  comment: string,
}
interface IValid {
  validName: boolean,
  validPhone: boolean,
  validComment: boolean
}
export const ModalContext =  createContext<iModalContext>({
  values: Array,
  errors: Array,
  canSubmit: false,
  closePopup: () => {},
  handleSubmitBuy: () => {},
  handleChange: () => {},
  isOpenBuyPopup: false,
  openPopupBuy: () => {},
  handleProductClick: () => {},
  selectedProduct: {},
  isOpenProductPopup: false
})
export const ModalState = ({children}: {children: React.ReactNode}) => {
  const defaultValues:IValues = {
    name: '',
    phone: '',
    comment: '',
  }

  const defaultValid:IValid = {
    validName: false,
    validPhone: false,
    validComment: false
  }
  const [values, setValues] = useState(defaultValues)
  const [errors, setErrors] = useState(defaultValues)
  const [valid, setValid] = useState(defaultValid)
  const [canSubmit, setCanSubmit] = useState(false)
  const [isOpenBuyPopup, seIsOpenBuyPopup] = useState(false)
  const [selectedProduct, setIsSelectedProduct] = useState({})
  const [isOpenProductPopup, setIsOpenProductPopup] = useState(false)
  const openPopupBuy = () => {
    seIsOpenBuyPopup(true)
  }
  const closePopup = (e: any) => {
    seIsOpenBuyPopup(false)
    setIsOpenProductPopup(false)
    setValues(defaultValues)
    setErrors(defaultValues)
  }

  const handleSubmitBuy = (e: any) => {
    e.preventDefault()
    setValues(defaultValues)
    console.log(values)
    console.log(selectedProduct)
    closePopup(e)
  }
  const handleProductClick = (product) => {
    setIsSelectedProduct(product)
    setIsOpenProductPopup(true)
  }

  const handleValidate = (name: string, value: string) => {
    let regesName = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
    let regesPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    let isErrors = errors
    let {validName, validPhone, validComment} = valid
    
    if (name === 'name') {
      if(!value) {
        isErrors.name = 'Name is required'
        validName = false
      } else {
        validName = regesName.test(value)
        isErrors.name = validName
        ? ''
        : 'Only text name and minimum 2 length'
      }
    }
    if (name === 'phone') {
      if(!value) {
        validPhone = false
        isErrors.phone = 'Phone is required'
      } else {
        validPhone = regesPhone.test(value)
        isErrors.phone = validPhone
          ? ''
          : 'Phone must be numbers and 11 length'
      }
    }
    setErrors(isErrors)
    setValid({
      validName: validName,
      validPhone: validPhone,
      validComment: validComment
    })
    setCanSubmit(validName && validPhone && !validComment)
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
  return (
      <ModalContext.Provider value={{closePopup, handleSubmitBuy, handleChange, values, errors, canSubmit, isOpenBuyPopup, openPopupBuy, handleProductClick, selectedProduct, isOpenProductPopup}}>
          {children}
      </ModalContext.Provider>
  )
}
