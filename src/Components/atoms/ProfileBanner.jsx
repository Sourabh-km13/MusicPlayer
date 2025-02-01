import React from "react"

export default function ProfileBanner() {
  return (
    <>
      <div className=" p-10 flex items-end">
        <div className="p-5">
          <img
            src="../../public/profileimg.png"
            alt="profile"
            className="rounded-full w-28 h-28 shadow-2xl shadow-black"
          />
        </div>
        <div className="p-5 text-white leading-10">
          <p className="text-xs font-bold uppercase "> Profile</p>
          <h1 className="text-5xl">Sourabh Mishra</h1>
          <p className="text-xs">Playlist</p>
        </div>
      </div>

    </>
  )
}
