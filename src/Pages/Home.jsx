import React from 'react'
import GradientWrapper from '../Components/molecules/GradientWrapper'
import ProfileBanner from '../Components/atoms/ProfileBanner'
import PlaylistCard from '../Components/atoms/PlaylistCard'
import songs from '../utils/songArray'
export default function Home() {  
  return (
    <GradientWrapper
    colorfrom={"violet-600"}
    viacolor={"gray-900"}
    tocolor={"black"}
    >
        <ProfileBanner/>
        {/*playlists */}
        <div className='font-bold text-2xl text-white p-10'>
          Top Artist this month
        </div>
        <div className='px-5 py-5 flex flex-col gap-4 md:px-10 md:flex-row md:gap-12'>
          {
            songs.map((song)=>{
              return(
                <PlaylistCard name={song.artist} key={song.id} index={song.id-1}/>
              )
            })
          }
          
        </div>
    </GradientWrapper>
  )
}
