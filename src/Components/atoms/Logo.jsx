import React ,{memo} from 'react'

const Logo=({width,height})=> {
  return (
   
        <div
            className='px-5 mb-5 w-32'
            >
                <img 
                src="../../../public/logo.png"
                alt="logo"
                className={`w-${width} h-${height}`}
                />
            </div>
    
  )
}
const MemoLogo=memo(Logo)
export default MemoLogo