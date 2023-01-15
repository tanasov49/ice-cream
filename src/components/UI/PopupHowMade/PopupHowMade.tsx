import React from 'react'
interface IProduct {
    title: string
  }
export default function PopupHowMade({title}: IProduct) {
    return (
          <h4 className="form-submit__title">{title}</h4>
          
  )
}
