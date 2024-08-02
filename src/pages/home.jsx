import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <Header/>
          <div className='heroSection'>
             <div className='heroImg'>
                <div className='heroImgOverlay'></div>
                <div className='heroText'>
                   <h1>Leading the Charge for Better Health.</h1>
                   <p>Welcome to Foot Soldiers for Health. Our dedicated team offers top-quality, compassionate care tailored to your needs. From check-ups to advanced treatments, we're committed to your well-being. Join us in championing health and wellness.</p>
                   <Link className='btn' to="">Learn More →</Link>
                </div>
                <img src='\images\heroImg.jpg'></img>
             </div>
          </div>

          <div className='section2'>
             
          </div>
      <Footer/>
    </div>
  )
}

export default Home
