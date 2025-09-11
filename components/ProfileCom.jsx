import React from 'react'
import SideBarComp from './SideBarComp'
import NavBarSmall from './NavBarSmall'
import Link from 'next/link'
import Image from 'next/image'

function ProfileCom() {
 const naveData ={
    title: " profile",
    url:"/manager/agentslistpage",
    icon: true, 
    inpul: false,
   }
  return (
    <>
    <div className="flex min-h-screen bg-[#f9f7f5] mt-20">
      {/* Sidebar */}
    <SideBarComp/>

      {/* Main Content */}
      <div className="flex-1 p-6 ml-56">
        {/* Header */}
       <NavBarSmall data={naveData}/>

        {/* Agent Details */}
        <div className="bg-[#fff7f4] mt-6 p-4 rounded shadow">
         
        {/* Profile Info Card */}
        <div className="bg-[#fff] p-6 rounded-lg   max-w-full">
          {/* Profile Image Placeholder */}
          <div className="flex flex-col ">
            <div className="w-20 h-20 rounded-full border-2 border-red-500 mb-4">
              <Image src={"/img/ProfileImage.png"} height={100} width={100} alt="ProfileImage"/>
            </div>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex gap-4">
              <p className="font-semibold w-40">Full Name:</p>
              <p>Daniel Abcar</p>
            </div>
            <div className="flex gap-4">
              <p className="font-semibold w-40">Phone Number:</p>
              <p>+91-9876543210</p>
            </div>
            <div className="flex gap-4">
              <p className="font-semibold w-40">Email ID:</p>
              <p>example@company.com</p>
            </div>
            <div className="flex gap-4 items-center">
              <p className="font-semibold w-40">Password:</p>
              <p>•••••••</p>
              <Link className='ml-auto' href={"/manager/passwordpopup"}>
              <button className="ml-auto border border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-100">
                Change Password
              </button>
              </Link>
            </div>
          </div>

          {/* Update Profile Button */}
          <div className="mt-6">
            <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
              Update Profile
            </button>
          </div>
        </div>
          

         
        </div>
      </div>
    </div>
    </>)
}

export default ProfileCom