import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageTop from '../components/pageTop';
import BlogCards from '../components/blogCards';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const url='http://localhost:1337';

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch(url+'/api/blogs?populate=Cover');
        const data = await response.json();
        setBlogs(data.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    }

    fetchBlogs();
  }, []);

  const handleCardClick = (blogId) => {
    navigate(`/singleBlog/${blogId}`);
  };

  return (
    <div>
      <Header />
      <PageTop title="News And Blogs" breadcrum="Home > Blogs" />
      <div className='newsAndBlogsCont sectionPadding'>
        <div className='blogsCont'>
          <BlogCards blogs={blogs} onCardClick={handleCardClick} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
