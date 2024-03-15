import React from 'react'
import Banner from './Banner'
import About from './About'
import './Home.css'
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'

function Home() {
  return (
    <div>
        <section>
        <Banner />
        </section>
        <section>
        <About />
        </section>
        <section>
            <Skills />
        </section>
        <section>
            <Project />
        </section>
        <Contact/>
    </div>
  )
}

export default Home