import React from 'react'


function Flyout(props) {
  return (
    <div onMouseLeave={props.toggler} className='absolute right-[20px] w-52 z-50 bg-white rounded-xl shadow-lg top-[85px]'>
        <ul className='cursor-pointer my-3'>
            <li className='px-4 py-2 my-1 hover:bg-slate-100'>Sign up</li>
            <li className='px-4 py-2 my-1 hover:bg-slate-100'>Log in</li>
            <li className='px-4 py-2 my-1 hover:bg-slate-100'>Help</li>
        </ul>
    </div>
  )
}

export default Flyout