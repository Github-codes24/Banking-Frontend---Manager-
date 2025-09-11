import Link from 'next/link'
import React from 'react'

function Button({data}) {
  return (
    <>
     <div className="flex gap-4">
        {!data.fill ? (<Link
        href={data.route || "/"}
        className="border border-red-500 text-red-500 px-17 py-2 rounded-md hover:bg-red-50 transition">
        {data.text || "Home"}  
        </Link>): (<Link
        href={data.route || "/"}
        className={`${data.text==="Create Agent"?"bg-yellow-300 hover:bg-yellow-500":"bg-red-600 hover:bg-red-700"} text-white px-17 py-2 rounded-md  transition`}>
        {data.text || "Home"}  
        </Link>)}
    </div>
    </>
  )
}

export default Button