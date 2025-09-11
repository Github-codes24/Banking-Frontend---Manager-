import React from 'react'
import SideBarComp from './SideBarComp'
import NavBarSmall from './NavBarSmall'
import Button from './Button'
import PaginationCom from './PaginationCom'
import { getManagerTransactions } from '@/services/transactionService'
import { formatDate } from '@/app/utils/date'
import Link from 'next/link'

async function  WithdrawListCom() {
  
   const managerId = "689da812cc7836a88d544e93";
    const apiData = await  getManagerTransactions(managerId)

    console.log(apiData.data, "this")

    const btnData1 = {
        route: '/manager/agentslistpage',
        text: 'Reject',
        fill:  false,
    }
     const btnData2 = {
        route: '/manager/agentslistpage',
        text: 'Approve',
        fill:  true,
    }
   const naveData ={
    title: "withdraw List",
    url:"/manager/agentslistpage",
    icon: false, 
    inpul: true,
    btn: false,
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
   {/* Payment Details Table */}
        <div className=" ">
          {/* <h2 className="text-lg font-semibold border-b pb-2 mb-4">Payment Details</h2> */}
          <table className="w-full border-collapse border border-gray-200 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 p-2">SR. NO.</th>
                <th className="border border-gray-200 p-2">Date</th>
                <th className="border border-gray-200 p-2">Ladger Number</th>
                <th className="border border-gray-200 p-2">Customer Details</th>
                <th className="border border-gray-200 p-2">Amount(₹)</th>
                <th className="border border-gray-200 p-2">Action</th>
                <th className="border border-gray-200 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
                {apiData?.data?.map((item, index) => (
                // <div key={index}>
                // {/* <h1>{item.paymentMethod}</h1> */}
                // </div>
                 <tr key={index}>
                <td className="border border-gray-200 p-2">{index + 1}</td>
                <td className="border border-gray-200 p-2">{formatDate(item?.transactionDate) }</td>
               
                <td className="border border-gray-200 p-2">  <Link href={"/manager/withdrawdetailspage"} >DUJDCBC544SG </Link></td>
               
                <td className="border border-gray-200 p-2">{item?.customerId?.name}<br></br> {item?.customerId?.contact}</td>
                <td className="border border-gray-200 p-2">{item?.amount}</td>
                <td className="border border-gray-200 p-2">
                    <div className='mb-2'>
                    <Button data={btnData1} />
                    </div>
                     <div className=''>
                    <Button data={btnData2} />
                    </div>
                   
                    </td>
                <td className="border border-gray-200 p-2">{item.status}</td>
              </tr>
                 ))}           
            </tbody>
          </table>
          <PaginationCom/>
        </div>
          {/* Agent Information */}   
        </div>
      </div>
    </div>
    </>)
}

export default WithdrawListCom