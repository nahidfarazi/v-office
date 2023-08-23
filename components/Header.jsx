import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-col min-h-screen  px-24 pt-4 bg-[#1B1A1F]">
        <div className='flex justify-between'>
       <h2>Dashboard</h2>
        <h2>welcome to vo-office</h2>
      
       </div>
       <div className='flex justify-between gap-3 m-6'>
        <div className='justify-between border-[0.5px] border-gray-600 w-[300px] h-[70px] rounded-md'>
          <div className='flex flex-col p-2 text-white'>
            <h1>$17,334</h1>
            <p></p>
          </div>
        </div>
        <div className='justify-between bg-white w-[300px] h-[70px] rounded-md'>
          <div className='flex flex-col p-2 text-green-400'>
            <h1>$17,334</h1>
            <p></p>
          </div>
        </div>
        <div className='justify-between bg-white w-[300px] h-[70px] rounded-md'>
          <div className='flex flex-col p-2 text-green-400'>
            <h1>$17,334</h1>
            <p></p>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Header