import React, { useContext } from 'react'
import { menuLinks } from '../../../data/data'
import './menu.scss'
import { ModalContext } from '../../../context/ModalContext'
export default function Menu() {
  const {openMenu} = useContext(ModalContext)
  return (
    <div className={openMenu ? 'menu-popup menu-popup_active' : 'menu-popup'}>
      <ul className='menu'>
          {menuLinks.map(item => 
          <li key={item.id} className='menu-item'>
              <a className='menu-item__link' href='#'>{item.title}</a>
          </li>    
          )}
      </ul>
    </div>

  )
}
