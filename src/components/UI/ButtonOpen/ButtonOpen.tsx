import React from 'react'
import './button-open.scss'
import { IValues } from '../../../interface/model'

interface TextProps {
    button: IValues
}
export default function ButtonOpen({button}: TextProps) {

  return (
    <button className={`button-open ${button.class}`} type='button'>
      {button.title}
    </button>
  )
}
