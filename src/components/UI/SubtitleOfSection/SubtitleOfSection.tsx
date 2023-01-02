import React from 'react'
import { IValues } from '../../../interface/model'
import './subtitle-section.scss'
interface PropsText {
    text: IValues
}
export default function SubtitleOfSection({text}: PropsText) {
  return (
    <h2 className={`subtitle-section ${text.classSubtitle}`}>{text.subtitle}</h2>
  )
}
