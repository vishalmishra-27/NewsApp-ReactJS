import React from 'react'
import Loader from './Loader.gif'

const Spinner = () => {
  return (
    <div className='spinner'><img src={Loader} alt="loading" /></div>
  )
}

export default Spinner