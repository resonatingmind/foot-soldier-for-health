import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='footer'>
      <div className='footerImg'>
        <img src='\images\footerImg.jpg'></img>
        <div className='fOverlay'></div>
      </div>
      <div className='fContent sectionPadding'>
          <div className='sec1 fSec'>
               <img src='\images\FSH Logo Tranparent.png'></img>
               <p className='fDes'>Welcome to Foot Soldiers for Health. Our dedicated team offers top-quality, compassionate care tailored to your needs.</p>
               <h3>Opening Hours</h3>
               <p>Mon-Sat 24H</p>
               <p>Sunday-closed</p>
          </div>
          <div className='sec2 fSec'>
               <h2>Navigation</h2>
               <div className='fSecContainer'>
                  <Link className='fLinks' to='/home'>Home</Link>
                  <Link className='fLinks' to='/about-us'>About Us</Link>
                  <Link className='fLinks' to='/contact'>Contact Us</Link>
                  <Link className='fLinks' to='/services'>Services</Link>
               </div>
          </div>
          <div className='sec3 fSec'>
               <h2>Quick Links</h2>
               <div className='fSecContainer'>
                  <Link className='fLinks' to='/blogs'>Blogs</Link>
                  <Link className='fLinks' to='/careers'>Careers</Link>
                  <Link className='fLinks' to='/gallery'>Gallery</Link>
                  <Link className='fLinks' to='/team'>Team</Link>
               </div>
          </div>
          <div className='sec4 fSec'>
               <h2>Get In Touch</h2>
               <div className='fSecContainer'>
                 <div className='fSecMiniContainer'>
                   <div className='fIcon'><img src='\Icons\locationIcon.svg'></img></div>
                   <div>
                     <h3>Address</h3>
                     <p>This is their address</p>
                   </div>
                 </div>

                 <div className='fSecMiniContainer'>
                   <div className='fIcon'><img src='\Icons\callIcon.svg'></img></div>
                   <div>
                     <h3>Phone</h3>
                     <p>+91 9087689654</p>
                   </div>
                 </div>

                 <div className='fSecMiniContainer'>
                   <div className='fIcon'><img src='\Icons\mailIcon.svg'></img></div>
                   <div>
                     <h3>Email</h3>
                     <p>help@foodsoldiersforhealth.com</p>
                   </div>
                 </div>
               </div>
          </div>
          <div className='fCredit'>
            <hr/>
            <div className='fCreditContainer'>
              <p>{currentYear} Foot Soldiers For Health. All rights reserved.</p>
              <p>Made With <i class="fa-solid fa-heart"></i> By <Link className='fLinks' style={{textDecoration:"underline"}} to='https://digitigers.in/'>DigiTigers</Link></p>
            </div>
          </div>
      </div>
    </div>
  )
}