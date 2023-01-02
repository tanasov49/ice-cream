import React from 'react'
import { IValues } from '../../../interface/model'
import './title-section.scss'
interface PropText {
    text: IValues
}
export default function TitleOfSection({text}: PropText) {
  return (
    <h3 className={`title-section ${text.classTitle}`}>{text.title}</h3>
  )
}
