import React, { useContext} from 'react'
import CloseSvg from '../../../images/Popup/close.svg'
import {ModalContext} from '../../../context/ModalContext'
interface IForm {
  isOpen: boolean,
  children: React.ReactNode,
  title: string
}
export default function Popup({children, isOpen, title}: IForm) {
    const {closePopup} = useContext(ModalContext)
  return (
    <div className={isOpen ? 'popup popup_opened' : 'popup'}>
        <div className="popup-container">
            <button type='button' onClick={closePopup} className="popup-button-close">
                <CloseSvg />
            </button>
            <h4 className="form-submit__title">{title}</h4>
            {children}
        </div>
    </div>
  )
}
