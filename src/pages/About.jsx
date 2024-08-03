import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PageTop from '../components/pageTop'

export default function About() {
  return (
    <div className='about'>
      <Header/>
      <PageTop title="About Us" breadcrum="Home > About Us"/>
      <Footer/>
    </div>
  )
}
