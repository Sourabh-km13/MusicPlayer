import React from 'react'

export default function GradientWrapper({
  colorfrom,
  viacolor,
  tocolor, 
  children
}) {
  return (
    <>
    <div
    className=
    {`h-full overflow-y-auto bg-gradient-to-bl from-violet-800 via-gray-900 to-black`}
    >
      {children}  
    </div>
    </>
  )
}
