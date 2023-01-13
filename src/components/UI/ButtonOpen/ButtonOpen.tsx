import React from 'react'
import './button-open.scss'
import { IValues } from '../../../interface/model'

interface TextProps {
    button: IValues
    handleOpen: () => void
}
export default function ButtonOpen({button, handleOpen}: TextProps) {

  return (
    <button onClick={handleOpen} className={`button-open ${button.class}`} type='button'>
      {button.title}
    </button>
  )
}
