import React, { useContext } from 'react'
import { MdPlayCircleOutline } from 'react-icons/md'
import playerContext from './../../Context/playerContext';
export default function PlaylistCard(
    {
        name="artist 1",
        index,
    }
) {
    const{setPlayerstate}=useContext(playerContext)
    function handlecardclick(){
        setPlayerstate((prev)=>({...prev,index:index}))
        
    }
    return (
        <div
            key={index}
            className=
            {`mx-auto p-2 w-1/3 text-white shadow-xl shadow-black
             bg-violet-600 rounded-lg flex flex-col items-center md:w-1/6`}>
            <img
                className='rounded-full shadow-xl shadow-black w-24 h-24 md:h-32 md:w-32'
                src={`https://robohash.org/${name}`} alt="image" />
            <div className='p-2'>
                <p 
                className='md:text-2xl uppercase py-2'>{name}</p>
                <p 
                className='text-2xl py-1 font-bold cursor-pointer hover:underline hover:text-purple-300'
                onClick={handlecardclick}
                >
                    <MdPlayCircleOutline/>
                </p>
            </div>
        </div>
    )
}
