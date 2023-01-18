import React from 'react'
import MapImage from '../../../images/Footer/map.jpg'
import './map-container.scss'
export default function MapContainer() {
  return (
    <React.Fragment>
        <img className='popup-container__image' src={MapImage} alt='our location' />
        <a className='popup-container__link' href='https://goo.gl/maps/gVW1oKbayiD8UnCn7' target='_blank'><span>Open map</span></a>
    </React.Fragment>
  )
}
