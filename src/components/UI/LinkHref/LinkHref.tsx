import React from 'react'
import { IValues } from '../../../interface/model'
import './link-href.scss'
interface LinkProps {
  link: IValues
}
export default function LinkHref({link}: LinkProps) {
  return (
    <a href={link.url} className='link-href'>{link.title}</a>
  )
}
