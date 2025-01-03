import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'


const Layout: React.FC = () => {
  return (
    <div className='min-h-screen flex flex-col bg-beigeLight dark:bg-gray-800'>
        <Header ></Header>
        <Outlet />
    </div>
  )
}


export default Layout