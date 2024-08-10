import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PageTop from '../components/pageTop'
import SingleBlog from './SingleBlog'

export default function Blogs() {
  return (
    <div>
    <Header/>
    <PageTop title="News And Blogs" breadcrum="Home > Blogs"/>
    <div className='newsAndBlogsCont sectionPadding'>
        <div className='blogsCont'>
           
        </div>
        <div className='newsAndCategoryCont'>
            <div className='newsContainer'>
                
            </div>
            <div className='categoryContainer'>
               
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}
