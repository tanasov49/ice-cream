import React from 'react'
import LogoIcon from '../../../images/Logo/Logo.svg?url'
import { IValues } from '../../../interface/model'
import './logo.scss'
interface ClassProps {
    classLogo: IValues
}
export default function Logo({classLogo}: ClassProps) {
  
  return (
    <div className={`logo ${classLogo.class}`}>
        <img className='logo__image' src={LogoIcon} alt='logo' />
    </div>
  )
}
