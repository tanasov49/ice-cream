import React, { useContext} from 'react'
import './popup.scss'
import CloseSvg from '../../../images/Popup/close.svg'
import {ModalContext} from '../../../context/ModalContext'
interface IForm {
  isOpen: boolean,
  children: React.ReactNode,
  onSubmit: (e: React.SyntheticEvent<EventTarget>) => void,
  canSubmit: boolean
}
export default function Popup({children, isOpen, onSubmit, canSubmit}: IForm) {
    const {closePopup, rootRef} = useContext(ModalContext)
  return (
    <div className={isOpen ? 'popup popup_opened' : 'popup'}>
        <div ref={rootRef} className="popup-container">
            <button type='button' onClick={closePopup} className="popup-button-close">
                <CloseSvg />
            </button>
            <form  onSubmit={onSubmit} className={isOpen ? 'form-popup form-popup_opened' : 'form-popup'} noValidate>
            {isOpen && children}
            <button disabled={!canSubmit} className={!canSubmit ? 'form-popup__submit form-popup__submit_disabled' : 'form-popup__submit'} type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}
