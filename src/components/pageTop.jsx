import React from 'react'

export default function pageTop(props) {
  return (
    <div className='pageTop'>
       <h1>{props.title}</h1>
       <p>{props.breadcrum}</p>
    </div>
  )
}
