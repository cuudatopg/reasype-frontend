import React from 'react'
import {Link} from 'react-router-dom'

const DesktopNav = ({menuItems, logo}) => {
  return (
    <div className='bg-white rounded-lg h-16 flex justify-between items-center px-6 lg:px-6'>
      <a href='/'>
        <img src={logo} alt='logo' />
      </a>
      <ul className='flex gap-7'>
        {
          menuItems?.map((menu, index) => (
            <li key={index}>
              <Link to ={menu} className='font-medium capitalize text-sencondary'>{menu}</Link>
            </li>
          ))
        }
      </ul>
      {/* login and signup btn */}
      <ul className='flex items-center gap-4 font-medium'>
        <li>
          <button className='text-secondary px-4 py-2 rounded'>Log in</button>
        </li>
        <li>
          <button className='text-secondary px-4 py-2 rounded'>Signup</button>
        </li>
      </ul>
    </div>
  )
}

export default DesktopNav
