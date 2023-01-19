import React, {useContext, useState, useEffect} from 'react'
import ButtonOpen from '../ButtonOpen/ButtonOpen'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import {ModalContext} from '../../../context/ModalContext'
import './nav.scss'
import { buttonPage } from '../../../data/data'
import { classesPage } from '../../../data/data'
import MenuBtn from '../MenuBtn/MenuBtn'
export default function Nav() {
  const {openPopupBuy, openMenu} = useContext(ModalContext)
  const [buttonHide, setButtonHide] = useState(true)
  useEffect(() => {
    if (window.innerWidth < 767) {
      setButtonHide(false)
    } 
    if (openMenu && window.innerWidth < 767) {
        setButtonHide(true)
    }
  },[buttonHide, openMenu])
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
