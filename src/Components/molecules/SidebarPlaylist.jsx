import React from 'react'
import SidebarPlaylistitem from '../atoms/SidebarPlaylistitem'

function SidebarPlaylist() {
  return (
    <div className='flex flex-col px-5 mt-5 mb-5'>
    <SidebarPlaylistitem playlistname={"my playlist"}/>
    <SidebarPlaylistitem playlistname={"rock"}/>
    <SidebarPlaylistitem playlistname={"metal"}/>
    </div>
  )
}

export default SidebarPlaylist