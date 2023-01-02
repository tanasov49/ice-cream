import React from 'react'
import SectionMade from '../Sections/SectionMade/SectionMade'
import SectionProducts from '../Sections/SectionProducts/SectionProducts'

export default function Main() {
  return (
    <main className='main'>
        <SectionProducts />
        <SectionMade />
    </main>
  )
}
