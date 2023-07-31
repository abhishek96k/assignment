import React from 'react'

function Navbar () {
  return (
    <div className="bg-black sticky top-0 bg-fixed text-3xl flex justify-between text-blue-500 font-bold p-3 border-b-2 border-gray-500">
      <span>
        SpaceX<span className="text-white">Blog</span>
      </span>
    </div>
  )
}

export default Navbar