import React,{useState} from 'react'
import Sidebar from '../Components/organisms/Sidebar'
import Player from '../Components/organisms/Player'
import { GiHamburgerMenu } from 'react-icons/gi'


export const MainLayout = ({ children }) => {
  const [issideBaropen,setissideBaropen] = useState(true)
  return (

    <>
      <div className='h-screen w-screen flex flex-col'>
     //sidebar
        <div
          className={`fixed top-0 left-0 h-full w-64 transform ${issideBaropen?'-translate-x-0':'-translate-x-full'}
          transition-transform duration-300 ease-in-out md:translate-x-0 md:w-64 z-20
          `
          
          }>
          {<Sidebar />}
          
        </div>
        {
          <button 
          className='absolute top-2 left-4 z-30 text-violet-800 text-2xl md:hidden'
          onClick={()=>{
            setissideBaropen(prev=>!prev)
          }}
          ><GiHamburgerMenu/>
          </button>
        }
        
            
      //main Content
        <div
        className='absolute w-svw top-0 md:ml-64 md:w-[calc(100vw-256px)]'
        >
          <div className='h-[calc(100vh-100px)]'>
              {children}
          </div>
        </div>

     //player
        <div
          className='absolute h-[100px] left-0 bottom-0 w-full '
        >
          <Player/>
        </div>

      </div>


    </>
  )
}
