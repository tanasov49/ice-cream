import React from 'react'
import './address.scss'
import {address} from '../../../data/data'
export default function Address() {
  return (
    <ul className='address'>
        {address.map((item) => 
        <li key={item.id} className='address-item'>
            <h4 className="address-item__title">{item.type}</h4>
            <h5 className='address-item__city'>{item.city}</h5>
            <a href={item.urlMap} className="address-item__address">{item.address}</a>
            <p className="address-item__days address-item__days_working-days">{item.workingDays}</p>
            <p className='address-item__time address-item__time_working-days'>{item.timeWorking}</p>
            <p className="address-item__days address-item__days_days-off">{item.daysOff}</p>
            <p className='address-item__time address-item__time_days-off'>{item.timeOff}</p>
            <a href={`tel:${item.phone}`} className="address-item__phone">{item.phone}</a>
            <a href={`mailto:${item.email}`} className='address-item__email'>{item.email}</a>
        </li>
        )}
    </ul>
  )
}
