import React from 'react'
import PlayerControllerContainer from '../molecules/PlayerController/PlayerControllerContainer'


export default function Player() {
  
  return (
    <div
      className=
      'bg-gray-950 flex h-full justify-center items-center text-white border-t border-green-900'
    >
      <div className='w-full bg-gradient-to-r  from-black via-violet-950 to-black'>
        <div
          className='flex items-center '>
          <div
            className='p-5 w-1/5 '>
            <p className='md:text-2xl font-bold'>Song1</p>
            <p className='text-gray-400'>Artist 1</p>
          </div>
          <div
            className='flex items-center justify-center w-[62%]'>
            <PlayerControllerContainer />
          </div>

        </div>
      </div>


    </div>
  )
}
