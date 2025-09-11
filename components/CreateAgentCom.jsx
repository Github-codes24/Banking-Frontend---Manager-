"use client";
import React from 'react'
import SideBarComp from './SideBarComp'
import NavBarSmall from './NavBarSmall'
import { FaEye} from "react-icons/fa";
import Link from 'next/link';

function CreateAgentCom() {
   const naveData ={
    title: "Create Agent",
    url:"/manager/agentslistpage",
    icon: true, 
    inpul: false,
   }
  return (
    <>
    <div className="flex min-h-screen bg-[#ffffff] mt-20">
      {/* Sidebar */}
    <SideBarComp/>

      {/* Main Content */}
      <div className="flex-1 p-6 ml-56">
        {/* Header */}
       <NavBarSmall data={naveData}/>

        {/* Agent Details */}
        <div className="bg-[#fff7f4] mt-6 p-4 rounded shadow">

          <div className="mt-4 border rounded p-4 bg-white shadow-sm">
           
    <form className="space-y-6">
          {/* Agent Name */}
          <div className="flex items-center gap-6">
            <label className="w-40 text-gray-700 font-medium">Agent Name</label>
            <input
              type="text"
              defaultValue="Max William"
              className="flex-1 bg-gray-100 px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-200"
            />
          </div>

          {/* Email Address */}
          <div className="flex items-center gap-6">
            <label className="w-40 text-gray-700 font-medium">
              Email Address
            </label>
            <input
              type="email"
              defaultValue="maxwilliam@example.com"
              className="flex-1 bg-gray-100 px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-200"
            />
          </div>

          {/* Contact No. */}
          <div className="flex items-center gap-6">
            <label className="w-40 text-gray-700 font-medium">Contact No.</label>
            <input
              type="text"
              defaultValue="98765 43210"
              className="flex-1 bg-gray-100 px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-200"
            />
          </div>

          {/* Address */}
          <div className="flex items-center gap-6">
            <label className="w-40 text-gray-700 font-medium">Address</label>
            <input
              type="text"
              defaultValue="123, Elm Street, New Delhi, India"
              className="flex-1 bg-gray-100 px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-200"
            />
          </div>

          {/* Password */}
          <div className="flex items-center gap-6">
            <label className="w-40 text-gray-700 font-medium">Password</label>
            <input
              type="password"
              defaultValue="123456"
              className="flex-1 bg-gray-100 px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-200"
            />
          </div>

         
        </form>
          

          </div>
 {/* Buttons */}
          <div className="flex justify-center gap-4 pt-6">
            <button
              type="button"
              className="px-6 py-2 border border-red-400 text-red-500 rounded-md hover:bg-red-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
              Save
            </button>
          </div>
         
        </div>
      </div>
    </div>
    </>
  )
}

export default CreateAgentCom



// ............
// "use client";
// import React from "react";

// export default function AgentForm() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
//       <div className="w-full max-w-3xl bg-[#FFF8F3] rounded-xl shadow-md p-8 border">
//         <form className="space-y-6">
//           {/* Agent Name */}
//           <div className="flex items-center gap-6">
//             <label className="w-40 text-gray-700 font-medium">Agent Name</label>
//             <input
//               type="text"
//               defaultValue="Max William"
//               className="flex-1 bg-gray-100 px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-200"
//             />
//           </div>

//           {/* Email Address */}
//           <div className="flex items-center gap-6">
//             <label className="w-40 text-gray-700 font-medium">
//               Email Address
//             </label>
//             <input
//               type="email"
//               defaultValue="maxwilliam@example.com"
//               className="flex-1 bg-gray-100 px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-200"
//             />
//           </div>

//           {/* Contact No. */}
//           <div className="flex items-center gap-6">
//             <label className="w-40 text-gray-700 font-medium">Contact No.</label>
//             <input
//               type="text"
//               defaultValue="98765 43210"
//               className="flex-1 bg-gray-100 px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-200"
//             />
//           </div>

//           {/* Address */}
//           <div className="flex items-center gap-6">
//             <label className="w-40 text-gray-700 font-medium">Address</label>
//             <input
//               type="text"
//               defaultValue="123, Elm Street, New Delhi, India"
//               className="flex-1 bg-gray-100 px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-200"
//             />
//           </div>

//           {/* Password */}
//           <div className="flex items-center gap-6">
//             <label className="w-40 text-gray-700 font-medium">Password</label>
//             <input
//               type="password"
//               defaultValue="123456"
//               className="flex-1 bg-gray-100 px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-200"
//             />
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-center gap-4 pt-6">
//             <button
//               type="button"
//               className="px-6 py-2 border border-red-400 text-red-500 rounded-md hover:bg-red-50 transition"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
