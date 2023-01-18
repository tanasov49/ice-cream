import React, { createContext, useEffect, useRef, useState} from "react";
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
  isOpenProductPopup: boolean,
  isOpenReadMore: boolean,
  openPopupReadMore: (e) => void,
  rootRef: any,
  isOpenPopupMap: boolean,
  openPopupMap: (e) => void,
  isOpenFranchise: boolean,
  openPopupFranchise: (e) => void,
  canSubmitWithEmail: boolean,
  handleSubmitFranchise: (e) => void,
  openMenu: boolean,
  handleOpenMenu: () => void,
  
}
interface IValues {
  name: string,
  phone: string | number,
  comment: string,
  email: string
}
interface IValid {
  validName: boolean,
  validPhone: boolean,
  validComment: boolean,
  validEmail: boolean
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
  isOpenProductPopup: false,
  isOpenReadMore: false,
  openPopupReadMore: () => {},
  rootRef: null,
  isOpenPopupMap: false,
  openPopupMap: () => {},
  isOpenFranchise: false,
  openPopupFranchise: () => {},
  canSubmitWithEmail: false,
  handleSubmitFranchise: () => {},
  openMenu: false,
  handleOpenMenu: () => {},
})
export const ModalState = ({children}: {children: React.ReactNode}) => {
  const defaultValues:IValues = {
    name: '',
    phone: '',
    comment: '',
    email: ''
  }

  const defaultValid:IValid = {
    validName: false,
    validPhone: false,
    validComment: false,
    validEmail: false
  }
  const [values, setValues] = useState(defaultValues)
  const [errors, setErrors] = useState(defaultValues)
  const [valid, setValid] = useState(defaultValid)
  const [canSubmit, setCanSubmit] = useState(false)
  const [canSubmitWithEmail, setCanSubmitWithEmail] = useState(false)
  const [isOpenBuyPopup, seIsOpenBuyPopup] = useState(false)
  const [selectedProduct, setIsSelectedProduct] = useState({})
  const [isOpenProductPopup, setIsOpenProductPopup] = useState(false)
  const [isOpenReadMore, setIsOpenReadMore] = useState(false)
  const [isOpenPopupMap, setIsOpenPopupMap] = useState(false)
  const [isOpenFranchise, setIsOpenFranchise] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  const rootRef = useRef<HTMLDivElement>()
  const handleClickOutSide = (e: any) => {
    if (rootRef.current && !rootRef.current.contains(e.target) && e.target.classList.contains('popup_opened')) {
      closePopup(e)
    } 
  }
  const handleOpenMenu = () => {
    if (openMenu === false) {
      setOpenMenu(true)
    } else if (openMenu === true) {
      setOpenMenu(false)
    }
      
  }
  const openPopupBuy = () => {
    seIsOpenBuyPopup(true)
  }
  const closePopup = (e: any) => {
    seIsOpenBuyPopup(false)
    setIsOpenProductPopup(false)
    setValues(defaultValues)
    setErrors(defaultValues)
    setIsOpenReadMore(false)
    setIsSelectedProduct({})
    setIsOpenPopupMap(false)
    setIsOpenFranchise(false)
    setCanSubmit(false)
    setCanSubmitWithEmail(false)
  }

  const handleSubmitBuy = (e: any) => {
    e.preventDefault()
    setValues(defaultValues)
    console.log(values)
    console.log(selectedProduct)
    closePopup(e)
  }
  const handleSubmitFranchise = (e: any) => {
    e.preventDefault()
    setValues(defaultValues)
    closePopup(e)
  }
  const handleProductClick = (product) => {
    setIsSelectedProduct(product)
    setIsOpenProductPopup(true)
  }
  const openPopupReadMore = (e: any) => {
    setIsOpenReadMore(true)
  }
  const openPopupMap = (e: any) => {
    setIsOpenPopupMap(true)
  }
  const openPopupFranchise = (e: any) => {
    setIsOpenFranchise(true)
  } 

  useEffect(() => {
    document.addEventListener('click', handleClickOutSide, true)
    return () => {
      document.removeEventListener('click', handleClickOutSide, true)
    }
  },[handleClickOutSide])
  const handleValidate = (name: string, value: string) => {
    let regesName = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
    let regesPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    let regesEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let isErrors = errors
    let {validName, validPhone, validComment, validEmail} = valid
    
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
    if (name === 'comment') {
      if (value) {
        validComment = false
        
      } else if (!value) {
        validComment = regesName.test(value)
        isErrors.comment = validComment
        ? ''
        : 'Only text'
      }
    }
    if (name === 'email') {
      if(!value) {
        validEmail = false
        isErrors.email = 'Email is required'
      } else {
        validEmail = regesEmail.test(value)
        isErrors.email = validEmail
        ? ''
        : 'Email must be validate'
      }
    }
    setErrors(isErrors)
    setValid({
      validName: validName,
      validPhone: validPhone,
      validComment: validComment,
      validEmail: validEmail
    })
    setCanSubmit(validName && validPhone && !validComment)
    setCanSubmitWithEmail(validName && validPhone && !validComment && validEmail)
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
      <ModalContext.Provider value={{closePopup, handleSubmitBuy, handleChange, values, errors, canSubmit, isOpenBuyPopup, openPopupBuy, handleProductClick, selectedProduct, isOpenProductPopup, isOpenReadMore, openPopupReadMore, rootRef, isOpenPopupMap, openPopupMap, isOpenFranchise, openPopupFranchise, handleSubmitFranchise, canSubmitWithEmail, openMenu, handleOpenMenu}}>
          {children}
      </ModalContext.Provider>
  )
}
