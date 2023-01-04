import React from 'react'
import SectionMade from '../Sections/SectionMade/SectionMade'
import SectionProducts from '../Sections/SectionProducts/SectionProducts'
import SectionReviews from '../Sections/SectionReviews/SectionReviews'

export default function Main() {
  return (
    <main className='main'>
        <SectionProducts />
        <SectionMade />
        <SectionReviews />
    </main>
  )
}
