import React from 'react'

export default function PlaylistCard(
    {
        name="artist 1",
        
    }
) {
    return (
        <div
            className=
            {`py-5 w-1/3 text-white shadow-xl shadow-black
             bg-violet-600 rounded-lg flex flex-col items-center md:w-1/6`}>
            <img
                className='rounded-full shadow-xl shadow-black w-32 h-32 '
                src={`https://robohash.org/${name}`} alt="image" />
            <div className='p-5'>
                <p className='md:text-2xl uppercase '>{name}</p>
                <p className='text-xs font-bold'>playlist</p>
            </div>
        </div>
    )
}
