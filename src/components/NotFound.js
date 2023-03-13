import React from 'react'
import './NotFound.css'
import image from '../images/notFound.jpg'

export const NotFound = () => {
  return (
    <div className='notFound'>
      <img src={image} alt="Resource not found" />
      <h1>Resource Not Found</h1>
    </div>
  )
}
