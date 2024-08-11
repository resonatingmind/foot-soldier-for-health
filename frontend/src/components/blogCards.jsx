import React, { useState } from 'react';
import Loader from "react-js-loader";

// Function to truncate text by words
const truncateTextByWords = (text, maxWords) => {
  const words = text.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }
  return text;
};

const BlogCards = ({ blogs, onCardClick }) => {
  const url = 'http://localhost:1337';
  const maxWords = 27; // Adjust the max number of words as needed for the summary
  const maxTitleWords = 10; // Adjust the max number of words as needed for the title
  const [visibleCount, setVisibleCount] = useState(8); // Number of blogs to show initially

  // Handler for the "Show More" button
  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 8); // Increase the number of visible blogs
  };

  if(!blogs) return <div>
    <div style={{ textAlign: "center", height:"400px", display:"flex" }}>
            <Loader type="bubble-top" bgColor="#04437F" color="#04437F" title={""} size={30} />
          </div>
  </div>

  return (
    <div>
     <div className="blogCards">
      {blogs.slice(0, visibleCount).map(blog => (
        <div
          key={blog.id}
          className="blogCard boxShadow"
          onClick={() => onCardClick(blog.id)}
        >
          <img
            className='blogThumbnail'
            src={blog.attributes.Cover && blog.attributes.Cover.data && blog.attributes.Cover.data.attributes.url
              ? `${url}${blog.attributes.Cover.data.attributes.url}`
              : '/images/no-image.png'}
            alt={blog.attributes.Cover && blog.attributes.Cover.data && blog.attributes.Cover.data.attributes.alternativeText || 'Cover Image'}
          />
          <div className='blogCardDes'>
            <div>
              <p><i className="fa-solid fa-user"></i> {blog.attributes.Author}</p>
              <p><i className="fa-solid fa-calendar-days"></i> {blog.attributes.Date}</p>
            </div>
            <h3>{truncateTextByWords(blog.attributes.Title, maxTitleWords)}</h3>
            <p className='blogSummary'>{truncateTextByWords(blog.attributes.ShortSummary, maxWords)}</p>
          </div>
        </div>
      ))}
     </div>

     <div className='btnCont'>
      {/* Show More Button */}
      {visibleCount < blogs.length && (
        <button className="showMoreBtn" onClick={handleShowMore}>
          Show More
        </button>
      )}
     </div>
    </div>
  );
};

export default BlogCards;
