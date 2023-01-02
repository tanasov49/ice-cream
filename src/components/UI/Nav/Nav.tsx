import React from 'react'
import ButtonOpen from '../ButtonOpen/ButtonOpen'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import './nav.scss'
import { buttonPage } from '../../../data/data'
import { classesPage } from '../../../data/data'
export default function Nav() {
  return (
    <nav className='nav'>
        <Logo classLogo={classesPage[0]} />
        <Menu />
        <ButtonOpen button={buttonPage[0]} />
    </nav>
  )
}
