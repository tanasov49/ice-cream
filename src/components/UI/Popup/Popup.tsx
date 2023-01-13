import React, {useContext} from 'react'
import './popup.scss'
import CloseSvg from '../../../images/Popup/close.svg'
import {ModalContext} from '../../../context/ModalContext'
import FormPopup from '../FormPopup/FormPopup'

export default function Popup() {
    const {modal, closeModal} = useContext(ModalContext)
    const closePopupOut = (e: any) => {
      e.currentTarget === e.target && closeModal(e)
    }
  return (
    <div onClick={(e: any) => 
      e.currentTarget === e.target }  className={modal ? 'popup popup_opened' : 'popup'}>
        <div  className="popup-container">
            <button type='button' onClick={closeModal} className="popup-button-close">
                <CloseSvg />
            </button>
              <FormPopup />
        </div>
    </div>
  )
}
