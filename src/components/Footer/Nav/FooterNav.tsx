import React from 'react'
import './footer-nav.scss'
import {textFooterNav} from '../../../data/data'
import SocialIcons from '../../UI/SocialIcons/SocialIcons'
export default function FooterNav() {
  return (
    <nav className='footer-nav'>
        <div className="footer-text">
            <h3 className="footer-text__title">{textFooterNav.title}</h3>
            <h2 className="footer-text__subtitle">{textFooterNav.subtitle}</h2>
        </div>
        <SocialIcons />
        <div className="footer-contacts">
            <p className="footer-contacts__text">{textFooterNav.text}</p>
            <a href={`tel:${textFooterNav.phone}`} className="footer-contacts__phone">{textFooterNav.phone}</a>
        </div>
    </nav>
  )
}
