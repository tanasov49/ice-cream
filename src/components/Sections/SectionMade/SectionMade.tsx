import React, { useContext } from 'react'
import SubtitleOfSection from '../../UI/SubtitleOfSection/SubtitleOfSection'
import TitleOfSection from '../../UI/TitleOfSection/TitleOfSection'
import './section-made.scss'
import {textSection, objectsSectionMade, buttonPage} from '../../../data/data'
import ButtonOpen from '../../UI/ButtonOpen/ButtonOpen'
import Advantages from '../../UI/Advantages/Advantages'
import {ModalContext} from '../../../context/ModalContext'
export default function SectionMade() {
  const {openPopupReadMore} = useContext(ModalContext)
  return (
    <section className='section-made'>
        <TitleOfSection text={textSection[1]} />
        <SubtitleOfSection text={textSection[1]} />
        <div className="made-about">
            <div className='made-about__image'>
                <img src={objectsSectionMade.src} alt='photo cow' />
            </div>
            <div className="made-text">
                <p className='made-text__text'>{objectsSectionMade.text1}</p>
                <p className='made-text__subtitle'>{objectsSectionMade.text2}</p>
                <p className='made-text__subtitle'>{objectsSectionMade.text3}</p>
                <ButtonOpen handleOpen={openPopupReadMore} button={buttonPage[2]} />
            </div>
        </div>
        <Advantages />
    </section>
  )
}
