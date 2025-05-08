import React from 'react'
import { useSelector } from "react-redux";

export default function UserName() {

  const userName =  useSelector(state=> state.user.userName);
  
  if(!userName) return null;

  return (
    <p className='font-semibold text-sm hidden md:block'>
      {userName}
    </p>
  )
}
