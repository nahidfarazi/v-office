import React from 'react'
import Image from "next/image";
import { Link } from 'lucide-react';
const ListItem = ({name,email,role,status,work,project,image,href}) => {
  return (
    <div>
        <div className="grid grid-cols-6 items-center  px-6 py-2 border-b-[1px] 
        hover:bg-teal-200 hover:bg-opacity-20">
      <div className="col-span-2 flex gap-4">
        <input type="checkbox" />
        <Image className="w-[50px] rounded-full" src={image}/>
        <div>
          <h1 className='font-bold text-bl'>{name}</h1>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>
      <div>{role}</div>
      <div>{status}</div>
      <div>{work}</div>
      <div>{project}</div>
      </div>
    </div>
  )
}

export default ListItem