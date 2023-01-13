import React, {useContext} from 'react'
import ButtonOpen from '../ButtonOpen/ButtonOpen'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import {ModalContext} from '../../../context/ModalContext'
import './nav.scss'
import { buttonPage } from '../../../data/data'
import { classesPage } from '../../../data/data'
export default function Nav() {
  const {openModal} = useContext(ModalContext)
  return (
    <nav className='nav'>
        <Logo classLogo={classesPage[0]} />
        <Menu />
        <ButtonOpen handleOpen={openModal} button={buttonPage[0]} />
    </nav>
  )
}
