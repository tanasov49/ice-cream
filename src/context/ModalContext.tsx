// Для использования всех имеющихся обработчиков на странице
import React, { createContext, useEffect, useRef, useState} from "react";
// Интерфейс для использования ModalContext
interface iModalContext {
  values: any,
  errors: any,
  canSubmit: boolean,
  closePopup: () => void,
  handleSubmitBuy: (e: React.SyntheticEvent<EventTarget>) => void,
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
  isOpenBuyPopup: boolean,
  openPopupBuy: () => void,
  handleProductClick: (product: Object) => void,
  selectedProduct: {},
  isOpenProductPopup: boolean,
  isOpenReadMore: boolean,
  openPopupReadMore: () => void,
  rootRef: any,
  isOpenPopupMap: boolean,
  openPopupMap: () => void,
  isOpenFranchise: boolean,
  openPopupFranchise: () => void,
  canSubmitWithEmail: boolean,
  handleSubmitFranchise: (e: React.SyntheticEvent<EventTarget>) => void,
  openMenu: boolean,
  handleOpenMenu: () => void,
  buttonHide: boolean,
  slideIndex: number,
  handleClick: (index: number) => void
}
// Интерфейс для значений values
interface IValues {
  name: string,
  phone: string | number,
  comment: string,
  email: string
}
// Интерфейс для ошибок валидации
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
  buttonHide: false,
  slideIndex: 1,
  handleClick: () => {}
})
export const ModalState = ({children}: {children: React.ReactNode}) => {
// Дефолтные значения для инпутов форм
  const defaultValues:IValues = {
    name: '',
    phone: '',
    comment: '',
    email: ''
  }
// Дефолтные значения для валидации форм
  const defaultValid:IValid = {
    validName: false,
    validPhone: false,
    validComment: false,
    validEmail: false
  }
  // Хук состояния слайдера изображения в Section Reviews
  const [slideIndex, setSlideIndex] = useState(1)
  // Переключение слайдера изображений
  const handleClick = (index: number) => {
    setSlideIndex(index)
  }
  // Хук состояния values
  const [values, setValues] = useState(defaultValues)
  // Хук состояния ошибок
  const [errors, setErrors] = useState(defaultValues)
  // Хук состояния валидации форм
  const [valid, setValid] = useState(defaultValid)
  // Валидация кнопки submit для окна popup без email
  const [canSubmit, setCanSubmit] = useState(false)
   // Валидация кнопки submit для окна popup с email
  const [canSubmitWithEmail, setCanSubmitWithEmail] = useState(false)
  // Хук состояния открытия окна BuyNow
  const [isOpenBuyPopup, seIsOpenBuyPopup] = useState(false)
    // Хук для переноса массива выбранного продукта
  const [selectedProduct, setIsSelectedProduct] = useState({})
   // Хук открытия окна выбранного продукта
  const [isOpenProductPopup, setIsOpenProductPopup] = useState(false)
    // Хук состояния открытия окна ReadMore
  const [isOpenReadMore, setIsOpenReadMore] = useState(false)
    // Хук состояния открытия окна с картой
  const [isOpenPopupMap, setIsOpenPopupMap] = useState(false)
    // Хук состояния открытия окна Franchise
  const [isOpenFranchise, setIsOpenFranchise] = useState(false)
  // Хук состояния открытия меню для разрешения < 1024px
  const [openMenu, setOpenMenu] = useState(false)
  // Хук состояния для скрытия кнопки в блоке Nav Header
  const [buttonHide, setButtonHide] = useState(true)
  // Хук для отслеживания клика вне окна Popup
  const rootRef = useRef<HTMLDivElement>()
  // Открытие окна Buy
  const openPopupBuy = () => {
    seIsOpenBuyPopup(true)
  }
// Открытие окна ReadMore
  const openPopupReadMore = () => {
    setIsOpenReadMore(true)
  }
  // Открытие окна Map
  const openPopupMap = () => {
    setIsOpenPopupMap(true)
  }
  // Открытие окна Fraschise
  const openPopupFranchise = () => {
    setIsOpenFranchise(true)
  } 
  // Закрытие всех Popup, приведение дефолтных значений при любом закрытии, а также обнуление ошибок
  const closePopup = () => {
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
    // Клик вне окна popup
  const handleClickOutSide = (e: any) => {
      if (rootRef.current && !rootRef.current.contains(e.target) && e.target.classList.contains('popup_opened')) {
        closePopup()
      } 
    }
    // Отслеживание клика вне элемента
  useEffect(() => {
      document.addEventListener('click', handleClickOutSide, true)
      return () => {
        document.removeEventListener('click', handleClickOutSide, true)
      }
    },[handleClickOutSide])
  // Открытие меню блок Nav Header
  const handleOpenMenu = () => {
    if (openMenu === false) {
      setOpenMenu(true)
    } else if (openMenu === true) {
      setOpenMenu(false)
    }
  }
  // Отслеживание ширины окна для переноса кнопки buynow в меню
  useEffect(() => {
    if (window.innerWidth < 767) {
      setButtonHide(false)
    } 
    if (openMenu && window.innerWidth < 767) {
        setButtonHide(true)
    }
  },[buttonHide, openMenu])
  // Отправка submit для popup без email
  const handleSubmitBuy = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()
    setValues(defaultValues)
    console.log(values)
    console.log(selectedProduct)
    closePopup()
  }
    // Отправка submit для popup с email
  const handleSubmitFranchise = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()
    setValues(defaultValues)
    closePopup()
  }
    // Выбор продукта
  const handleProductClick = (product: Object) => {
    setIsSelectedProduct(product)
    setIsOpenProductPopup(true)
  }
  // Валидация формы
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
  // Отслежживание value формы и валидация ошибок
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
      <ModalContext.Provider value={{closePopup, handleSubmitBuy, handleChange, values, errors, canSubmit, isOpenBuyPopup, openPopupBuy, handleProductClick, selectedProduct, isOpenProductPopup, isOpenReadMore, openPopupReadMore, rootRef, isOpenPopupMap, openPopupMap, isOpenFranchise, openPopupFranchise, handleSubmitFranchise, canSubmitWithEmail, openMenu, handleOpenMenu, buttonHide, slideIndex, handleClick}}>
          {children}
      </ModalContext.Provider>
  )
}