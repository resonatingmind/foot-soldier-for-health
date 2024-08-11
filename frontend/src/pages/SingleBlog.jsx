import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageTop from '../components/pageTop';
import Loader from "react-js-loader";

// Custom component to render different types of rich text blocks
const RenderRichTextBlock = ({ block }) => {
  switch (block.type) {
    case 'paragraph':
      return <p className='blogParagraph'>{block.children.map((child, index) => child.text).join('')}</p>;
    case 'heading':
      const HeadingTag = `h${block.level}`; // Dynamically use heading level
      return <HeadingTag className="blogHeading">{block.children.map((child, index) => child.text).join('')}</HeadingTag>;
    case 'list':
      const ListTag = block.format === 'ordered' ? 'ol' : 'ul';
      return (
        <ListTag className='blogList'>
          {block.children.map((item, index) => (
            <li key={index}>
              {item.children.map((child, idx) => {
                if (child.type === 'text') {
                  return (
                    <span key={idx} style={{
                      fontWeight: child.bold ? 'bold' : 'normal',
                      fontStyle: child.italic ? 'italic' : 'normal',
                      textDecoration: child.underline ? 'underline' : 'none',
                      textDecorationLine: child.strikethrough ? 'line-through' : 'none'
                    }}>
                      {child.text}
                    </span>
                  );
                } else if (child.type === 'link') {
                  return (
                    <a className='blogLink' key={idx} href={child.url} target="_blank" rel="noopener noreferrer">
                      {child.children.map((linkChild, linkIdx) => linkChild.text).join('')}
                    </a>
                  );
                }
                return null;
              })}
            </li>
          ))}
        </ListTag>
      );
    case 'image':
      return (
        <img
          className='blogImg'
          src={block.image.url}
          alt={block.image.alternativeText}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      );
    case 'quote':
      return <div className='blogQuote'>{block.children.map((child, index) => child.text).join('')}</div>;
    default:
      return null;
  }
};

export default function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  const url = 'http://localhost:1337';

  useEffect(() => {
    async function fetchBlog() {
      try {
        console.log('Fetching blog with ID:', id); // Log ID to ensure correct fetching
        const response = await fetch(`${url}/api/blogs/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched blog data:', data.data); // Log the entire data
        setBlog(data.data); // Adjust based on your API response structure
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    }

    fetchBlog();
  }, [id]);

  if (!blog) {
    return (
      <div>
        <Header />
        <PageTop title="Blog" breadcrum="Home > Blogs > Blog Detail" />
        <div className='singleBlogCont'>  
          <div style={{ textAlign: "center", height:"400px", display:"flex" }}>
            <Loader type="bubble-top" bgColor="#04437F" color="#04437F" title={""} size={30} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Fallback image URL
  const fallbackImage = '/images/no-image.png';

  // Get the cover image URL from the blog data
  const coverImageUrl = blog.attributes.cover ? `${url}${blog.attributes.cover.data.attributes.url}` : fallbackImage;
  console.log('Cover Image URL:', coverImageUrl); // Log the final image URL

  return (
    <div>
      <Header />
      <PageTop title='Blog' breadcrum="Home > Blogs > Content" />
      <div className='singleBlogCont sectionPadding'>
        <div className='left'>
          <div className='leftInfo'>
            <p className='category'>{blog.attributes.Categories}</p>
            <p className='date'>{blog.attributes.Date}</p>
          </div>
          <div className='blogContent'>
            <h1 className='singleBlogTitle'>{blog.attributes.Title}</h1>
            {blog.attributes.BlogContent.map((block, index) => (
              <RenderRichTextBlock key={index} block={block} />
            ))}
          </div>
        </div>
        <div className='right'>
          {/* Additional content */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
