import React from 'react'
import { RouterProvider } from 'react-router-dom';
import { appRouter } from '../Utils/routers';
import Header from './Header';

const Body = () => {
  return (
    <div className='h-screen'>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body