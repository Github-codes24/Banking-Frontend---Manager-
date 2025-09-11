"use client"
import SideBarComp from '@/components/SideBarComp';
import ViewPaymentDetailsCom from '@/components/ViewPaymentDetailsCom'
import React, { useState } from 'react'

function page() {
    const [PaymentDetails] = useState([
      {id: 1, date: "01/06/2025", transactionid: "TXN001249", Amount: "5000", paymentmode: "Online", Status:"pending", pagelink:"/manager/viewpaymentdetailspage/" },
      {id: 2, date: "01/05/2025", transactionid: "TXN001249", Amount: "5000", paymentmode: "Online", Status:"success", pagelink:"/manager/viewpaymentdetailspage/" },
      {id: 3, date: "01/04/2025", transactionid: "TXN001249", Amount: "5000", paymentmode: "Online", Status:"success", pagelink:"/manager/viewpaymentdetailspage/" },
      {id: 4, date: "01/03/2025", transactionid: "TXN001249", Amount: "5000", paymentmode: "Online", Status:"pending", pagelink:"/manager/viewpaymentdetailspage/" },
      {id: 5, date: "01/02/2025", transactionid: "TXN001249", Amount: "5000", paymentmode: "Online", Status:"success", pagelink:"/manager/viewpaymentdetailspage/" },
    ]);
    const tadleHeader = ["SR.NO.", "Date", "Transaction ID", "Amount(r)", "Payment Mode","Status", "Action"];
  return (
    <div className="flex min-h-screen bg-[#ffffff] mt-20">
      <SideBarComp/>
    <ViewPaymentDetailsCom data={PaymentDetails} tadleHeader={tadleHeader}/>
    </div>
  )
}

export default page