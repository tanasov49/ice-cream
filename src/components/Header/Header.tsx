import React from 'react'
import Nav from '../UI/Nav/Nav'
import './header.scss'
import HeaderDescription from './Description/HeaderDescription'
import HeaderInfo from './Info/Header-Info'
import {imagesPage} from '../../data/data'
import HeaderAbout from './About/HeaderAbout'
export default function Header() {
  return (
    <header className='header'>
        <Nav />
        <HeaderInfo />
        <HeaderDescription imagesPage={imagesPage[0]} />
        <HeaderAbout imagesPage={imagesPage[1]} />
    </header>
  )
}
