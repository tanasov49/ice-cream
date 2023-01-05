import React from 'react'
import './social-icons.scss'
import {socialIcons} from '../../../data/data'
import Github from '../../../images/Logo/Logo.svg'
export default function SocialIcons() {
  return (
    <ul className='social-icons'>
        {socialIcons.map(({id, url, Svg}) =>
        <li className='social-icon' key={id}>
            <a className='social-icon__link' href={url}>
                <Svg />
            </a>
        </li>
        )}
    </ul>
  )
}
