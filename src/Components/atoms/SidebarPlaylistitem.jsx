import React from 'react'
import { Link } from 'react-router-dom'

export default function SidebarPlaylistitem({playlistname}) {
  return (
    <Link className='hover:underline text-lg'>{playlistname}</Link>
  )
}
