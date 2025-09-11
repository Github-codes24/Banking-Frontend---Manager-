import Link from 'next/link'
import React from 'react'
import { FaArrowAltCircleUp, FaMoneyBill, FaUserFriends } from 'react-icons/fa'

function SideBarComp() {
  return (
    <>
     <div className="fixed top-0 left-0 min-h-screen pt-21 w-56 bg-[#fff7f4] border-r border-gray-200 p-4">
        <ul className="space-y-4">
           <Link href={"/manager/agentslistpage"} className='block space-x-2'>
          <li className="flex items-center space-x-2 text-red-500 cursor-pointer  hover:bg-[#ffffff]">
            <FaUserFriends />
             <span>Agents</span>
          </li>
          </Link>
          <Link href={"/manager/todaypaymentlistpage"} className='block space-x-2'>
          <li className="flex items-center space-x-2 text-red-500 cursor-pointer hover:bg-[#ffffff]">
            <FaMoneyBill /> 
            <span>Payment</span>
          </li>
          </Link>
          {/* <Link href={"/manager/withdrawlistpage"} className='block space-x-2'>
          <li className="flex items-center space-x-2 text-red-500 cursor-pointer hover:bg-[#ffffff]">
            <FaArrowAltCircleUp />
             <span>Withdraw</span>
          </li>
          </Link> */}
        </ul>
        <div className="absolute bottom-6 left-4 flex items-center space-x-2 text-red-500 cursor-pointer">
          {/* <FaSignOutAlt />  */}
          <span>Logout</span>
        </div>
      </div>

    </>
  )
}

export default SideBarComp