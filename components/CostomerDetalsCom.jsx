import React from 'react'
import SideBarComp from './SideBarComp'
import NavBarSmall from './NavBarSmall'
import { FaEye} from "react-icons/fa";
import Link from 'next/link';

function CostomerDetalsCom() {
   const naveData ={
    title: "Custumer Details",
    url:"/manager/agentdetalspage",
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
          {/* <h2 className="font-semibold text-lg border-b pb-2">Agent Details</h2> */}

          {/* Agent Information */}
          <div className="mt-4 border rounded p-4 bg-white shadow-sm">
            <h3 className="font-semibold mb-3">Customer Information</h3>
            <div className="grid grid-cols-1  gap-2 text-sm mb-7">
              <p><strong>Customer Name:</strong> Theresa Webb</p>
              <p><strong>Phone Number:</strong> +91-9876543210</p>
              <p><strong>Date of Birth:</strong> 01/10/1999</p>
              <p><strong>Email:</strong> example@mail.com</p>
              <p><strong>Address:</strong> 1101 Thornridge Cir. Shiloh, Hawaii 81063</p>
              <p><strong>Adhar Card No</strong> 123456789000</p>
              <p><strong>Pan Card No</strong> ABCDE123F</p>
            </div>

            {/* ........ */}
             <h3 className="font-semibold mb-3">Ledger Information</h3>
             <div className='flex justify-between mb-7'>
              <div className="grid grid-cols-1 gap-2 text-sm">
              <p><strong>Ledger Number:</strong> DUJDCBC544SG</p>
              <p><strong>Ledger Type:</strong> Theresa Webb</p>
              <p><strong>Deposit Amount(₹):</strong> 1000000</p>
              <p><strong>Deposit Date:</strong> 01-01-2025</p>
              <p><strong>Maturity Date:</strong> 01/01/2030</p>
            </div>
              <p className='text-red-600'><Link href={'/manager/viewpaymentdetailspage'}><strong>VIEW PAYMENT DETAILS</strong> </Link></p>

             </div>
           
             {/* Payment Details */}

          </div>

         
        </div>
      </div>
    </div>
    </>
  )
}

export default CostomerDetalsCom