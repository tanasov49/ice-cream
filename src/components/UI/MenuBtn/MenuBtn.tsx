import React, { useContext } from 'react'
import { ModalContext } from '../../../context/ModalContext'
import './menu-btn.scss'
export default function MenuBtn() {
    const {openMenu, handleOpenMenu} = useContext(ModalContext)
  return (
    <div className={openMenu ? 'menu-btn menu-btn_active' : 'menu-btn'} onClick={handleOpenMenu}>
    <span className={openMenu ? 'menu-btn__icon menu-btn__icon_click' : 'menu-btn__icon'}></span>
  </div>
  )
}
