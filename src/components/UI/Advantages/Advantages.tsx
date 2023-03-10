import React from 'react'
import {advantages} from '../../../data/data'
import Advantages__Advantage from './__Advantage/Advantages__Advantage'
import './advantages.scss'
export default function Advantages() {
  return (
    <div className="advantages">
      {advantages.map((item) =>
      <Advantages__Advantage item={item} key={item.id} />
      )}
    </div>
  )
}
