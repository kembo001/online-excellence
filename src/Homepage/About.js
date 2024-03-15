import React from 'react'
import './About.css'
import PersonalShot from './Assets/Personalshot1.jpg'



function About() {
  return (
    <div>
        <h2>About</h2>
<div className='about-me row'>
    <div className='about-me-img'>
    <img alt='Personal Image' src={PersonalShot} />
    </div>
<div className='about-me-text'>
<h2>Brandon Kemboi</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quia minima quibusdam eligendi doloribus, expedita ipsa optio ipsam cumque iusto dicta alias inventore, blanditiis ad, quod quaerat ea at. Quae!</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quia minima quibusdam eligendi doloribus, expedita ipsa optio ipsam cumque iusto dicta alias inventore, blanditiis ad, quod quaerat ea at. Quae!</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quia minima quibusdam eligendi doloribus, expedita ipsa optio ipsam cumque iusto dicta alias inventore, blanditiis ad, quod quaerat ea at. Quae!</p>
</div>
</div>
    </div>
  )
}

export default About