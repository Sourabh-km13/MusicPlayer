import React from 'react'
import { MdHome, MdLibraryMusic, MdSearch } from 'react-icons/md' 
import { Link } from 'react-router-dom'
export default function Sidebarnavmenu() {
    const navigationMenu = [
        {
            name: "Home",
            icon: MdHome,
            to:'/'
        },
        {
            name: "Search",
            icon: MdSearch,
            to:"/search"
        },
        {
            name: "Playlists",
            icon: MdLibraryMusic,
            to:"/Playlists  "
        }
    ]
    return (
        <div
            className='mb-5'
        >
            <ul
                className='space-y-2'
            >
                {navigationMenu.map((menuitem) => {
                  
                    return (
                        <li
                            className='px-5 text-lg flex gap-2'
                            key={menuitem.name}>
                            <menuitem.icon color='white' size={26} />
                            <Link to={menuitem.to}
                            className='hover:underline'
                            >{menuitem.name}</Link>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}
