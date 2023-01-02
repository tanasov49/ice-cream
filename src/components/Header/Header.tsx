import React from 'react'
import Nav from '../UI/Nav/Nav'
import './header.scss'
import HeaderDescription from './__description/HeaderDescription'
import HeaderInfo from './__info/Header-Info'
import {imagesPage} from '../../data/data'
import HeaderAbout from './__about/HeaderAbout'
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
