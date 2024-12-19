import React from 'react'
import './Spinner.css'

const Spinner = () => {
  return (
    <div className='flex justify-center items-center flex-col h-screen'>
      <div className='spinner'></div>
      <p className='text-amber-200 text-lg font-semibold'>Loading .... </p>
    </div>
  )
}

export default Spinner
