import React from 'react'
import SideBarComp from './SideBarComp'
import NavBarSmall from './NavBarSmall'
import { FaEye} from "react-icons/fa";
import Link from 'next/link';

function AgentDetalsCom() {
   const naveData ={
    title: "Agent Details",
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
          {/* <h2 className="font-semibold text-lg border-b pb-2">Agent Details</h2> */}

          {/* Agent Information */}
          <div className="mt-4 border rounded p-4 bg-white shadow-sm">
            <h3 className="font-semibold mb-3">Agent Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <p><strong>Agent Name:</strong> Theresa Webb</p>
              <p><strong>Phone Number:</strong> +91-9876543210</p>
              <p><strong>Email:</strong> example@mail.com</p>
              <p><strong>Address:</strong> 1101 Thornridge Cir. Shiloh, Hawaii 81063</p>
              <p><strong>Joining Date:</strong> 01/04/2025</p>
            </div>
             {/* Payment Details */}
          <div className="mt-6  rounded bg-white ">
            <h3 className="font-semibold p-4 border-b">Costomer List</h3>
            <table className="w-full border text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">SR. NO.</th>
                  <th className="border px-3 py-2">Costomer</th>
                  <th className="border px-3 py-2">Phone Number</th>
                  <th className="border px-3 py-2">Email ID</th>
                  <th className="border px-3 py-2">Address</th>
                  <th className="border px-3 py-2">Action</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">1</td>
                  <td className="border px-3 py-2">03/04/2025</td>
                  <td className="border px-3 py-2">3,20,000</td>
                  <td className="border px-3 py-2">Cash</td>
                  <td className="border px-3 py-2">NIL</td>
                  <td className="border px-3 py-2  text-center  align-middle text-red-500 cursor-pointer ">
                     <Link href={`/manager/costomerdetalspage`}>
                      <FaEye className='mx-auto' />
                     </Link>
                  </td>
                </tr>
                <tr className="bg-[#fff7f4]">
                  <td className="border px-3 py-2">2</td>
                  <td className="border px-3 py-2">02/04/2025</td>
                  <td className="border px-3 py-2">3,20,000</td>
                  <td className="border px-3 py-2">Cash</td>
                  <td className="border px-3 py-2">NIL</td>
                  <td className="border px-3 py-2  text-center  align-middle text-red-500 cursor-pointer  ">
                     <Link href={`/manager/costomerdetalspage`}>
                      <FaEye className='mx-auto' />
                     </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>

         
        </div>
      </div>
    </div>
    </>
  )
}

export default AgentDetalsCom