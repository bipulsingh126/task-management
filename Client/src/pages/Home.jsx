import React from 'react'
import Sidebar from '../components/Home/Sidebar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex  h-[90vh] gap-4 '> 
    <div className=' w-1/6 border rounded-xl p-4 border-gray-500 flex flex-col justify-between'><Sidebar/></div>
    <div className='w-5/6 border rounded-xl p-4 border-gray-500 '><Outlet/></div>
</div>
  )
}

export default Home