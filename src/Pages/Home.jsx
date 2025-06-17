import React from 'react'
import Hero from '../Component/Hero'
import Project from './Project'
import Skills from './Skills'
import Contact from './Contact'

const Home = () => {
  return (
    <div className='bg-[#161616]' id='' >
        <Hero/>
        <Skills/>
        <Project/>
        <Contact/>
    </div>
  )
}

export default Home