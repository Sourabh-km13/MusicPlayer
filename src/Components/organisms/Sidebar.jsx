import React from 'react'
import Sidebarnavmenu from '../atoms/Sidebarnavmenu'
import Divider from '../atoms/Divider'
import SidebarPlaylist from '../molecules/SidebarPlaylist'
import MemoLogo from './../atoms/Logo';



export default function Sidebar() {
    
    return (
        <div
            className='w-full h-[calc(100vh-100px)] text-gray-400 px-2 bg-black'
        >
            <div
                className='py-5 h-full'
            >
                {/*logo*/}
                <MemoLogo width={16} height={16}/>

                {/* navmenu */}
                <Sidebarnavmenu/>

                {/*divider */}
                <Divider/>

                {/*Playlist*/}
                <SidebarPlaylist/>
            </div>
        </div>
    )
}
