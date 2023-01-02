import React from 'react'
import { IValues } from '../../../interface/model'
import './button-open-modal.scss'
interface TextProps {
    button: IValues
}
export default function ButtonModalOpen({button}: TextProps) {
  return (
    <button type='button' className={`button-open-modal ${button.class}`}>{button.title}</button>
  )
}
