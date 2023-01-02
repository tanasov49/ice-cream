import React from 'react'
import { menuLinks } from '../../../data/data'
import './menu.scss'
export default function Menu() {
  return (
    <ul className='menu'>
        {menuLinks.map(item => 
        <li key={item.id} className='menu-item'>
            <a className='menu-item__link' href='#'>{item.title}</a>
        </li>    
        )}
    </ul>
  )
}
