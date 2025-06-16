import React from 'react'
import Hero from '../Component/Hero'
import Project from './Project'
import Skills from './Skills'

const Home = () => {
  return (
    <div className='bg-[#161616]' id='' >
        <Hero/>
        <Skills/>
        <Project/>
    </div>
  )
}

export default Home