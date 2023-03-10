import React, {useContext} from 'react'
import {buttonPage} from '../../../data/data'
import './header__info.scss'
import LinkHref from '../../UI/LinkHref/LinkHref'
import {linksPage} from '../../../data/data'
import ButtonOpen from '../../UI/ButtonOpen/ButtonOpen'
import {ModalContext} from '../../../context/ModalContext'
export default function HeaderInfo() {
  const {openPopupBuy} = useContext(ModalContext)
  return (
    <div className='header__info'>
        <h1 className='header-title'>ice cream made with passion</h1>
        <ButtonOpen handleOpen={openPopupBuy} button={buttonPage[1]} />
        <LinkHref link={linksPage[0]} />
    </div>
  )
}
