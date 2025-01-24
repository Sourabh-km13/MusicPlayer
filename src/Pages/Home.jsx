import React from 'react'
import GradientWrapper from '../Components/molecules/GradientWrapper'
import ProfileBanner from '../Components/atoms/ProfileBanner'
import PlaylistCard from '../Components/atoms/PlaylistCard'

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
        <div className='px-10 py-5 flex gap-12  md:gap-24'>
          <PlaylistCard name='timberlake'/>
          <PlaylistCard name='Arijit'/>
          
        </div>
    </GradientWrapper>
  )
}
