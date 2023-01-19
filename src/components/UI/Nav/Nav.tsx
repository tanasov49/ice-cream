import React, {useContext} from 'react'
import ButtonOpen from '../ButtonOpen/ButtonOpen'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import {ModalContext} from '../../../context/ModalContext'
import './nav.scss'
import { buttonPage } from '../../../data/data'
import { classesPage } from '../../../data/data'
import MenuBtn from '../MenuBtn/MenuBtn'
export default function Nav() {
  const {openPopupBuy, buttonHide} = useContext(ModalContext)
  return (
    <nav className='nav'>
        <Logo classLogo={classesPage[0]} />
        <MenuBtn />
        <Menu />
        {buttonHide &&
        <ButtonOpen handleOpen={openPopupBuy} button={buttonPage[0]} />
        }
    </nav>
  )
}
