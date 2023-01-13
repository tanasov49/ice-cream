import React from 'react'
import AsideFooter from '../UI/AsideFooter/AsideFooter'
import './footer.scss'
import {buttonPage} from '../../data/data'
import ButtonOpen from '../UI/ButtonOpen/ButtonOpen'
import FooterNav from './Nav/FooterNav'
export default function Footer() {
  return (
    <footer className='footer'>
        <AsideFooter />
        <div className="footer-buttons">
            {/* <ButtonOpen button={buttonPage[3]} />
            <ButtonOpen button={buttonPage[4]} /> */}
        </div>
        <FooterNav />
    </footer>
  )
}
