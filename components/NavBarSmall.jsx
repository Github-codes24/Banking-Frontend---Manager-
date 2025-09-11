import Link from 'next/link'
import React from 'react'
import { FaArrowLeft} from "react-icons/fa";
import Button from './Button';

function NavBarSmall({data}) {
  let btnData1 = {
  route: '/manager/yesterdaypaymentlistpage',
  text: "See Yesterday's List",
  fill: true,
}

if (data?.btntitel === "createAgent") {
  btnData1 = {
    ...btnData1,
    route: "/manager/createagentpage",
    text: "Create Agent"
  }
}
  return (
    <>
      <div className="bg-[#fff7f4] p-4 rounded shadow flex justify-between items-center  pb-3 mb-6 flex-1">
              
            <div className="flex  text-lg font-semibold">  
           {data?.icon===true && ( <Link href={data?.url} >  <div className="flex items-center justify-center">
            <div className="p-1 mr-2 rounded-full border border-black-500 hover:bg-red-100">
            <FaArrowLeft className="text-black-500" />
            </div>
            </div>
            </Link>)}
            {data?.title}
            </div>
           { data?.inpul ===true && ( <input
              type="text"
              placeholder="Search by Agent Name"
              className="border px-3 py-1 rounded text-sm"
            />)}

            {data.btn===true &&(<Button data={btnData1} />)}
          </div>
    </>
  )
}

export default NavBarSmall