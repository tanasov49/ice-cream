import React, { useContext } from 'react'
import AsideFooter from '../UI/AsideFooter/AsideFooter'
import './footer.scss'
import {buttonPage} from '../../data/data'
import ButtonOpen from '../UI/ButtonOpen/ButtonOpen'
import FooterNav from './Nav/FooterNav'
import { ModalContext } from '../../context/ModalContext'
export default function Footer() {
  const {openPopupMap, openPopupFranchise}= useContext(ModalContext)
  return (
    <footer className='footer'>
        <AsideFooter />
        <div className="footer-buttons">
            <ButtonOpen handleOpen={openPopupMap} button={buttonPage[3]} />
            <ButtonOpen handleOpen={openPopupFranchise} button={buttonPage[4]} />
        </div>
        <FooterNav />
        <p className='footer__description'>© 2022 - IceCream. All Rights Reserved. </p>
    </footer>
  )
}
