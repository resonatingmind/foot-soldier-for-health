import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageTop from '../components/pageTop';
import ReactMarkdown from 'react-markdown';

export default function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await fetch(`http://localhost:1337/api/blogs/${id}`);
        const data = await response.json();
        setBlog(data.data); // Adjust based on your API response structure
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    }

    fetchBlog();
  }, [id]);

  if (!blog) return (
    <div>
      <Header />
      <PageTop title="Blog" breadcrum="Home > Blogs > Blog Detail" />
      <div className='singleBlogCont'>  
        <div style={{textAlign:"center"}}> Loading...</div> {/*Add Loader Here*/}
      </div>
      <Footer />
    </div>
  );
  else
  return (
    <div>
      <Header />
      <PageTop title={blog.attributes.title} breadcrum="Home > Blogs > Blog Detail" />
      <div className='singleBlogCont sectionPadding'>
        <div className='left'>
          <h1>{blog.attributes.Title}</h1>
          <ReactMarkdown className="convertedContent">{blog.attributes.BlogContent}</ReactMarkdown>
        </div>
        <div className='right'>

        </div>
      </div>
      <Footer />
    </div>
  );
}
