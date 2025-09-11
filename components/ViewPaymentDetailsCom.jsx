"use client"
import React, { useState } from 'react'
import SideBarComp from './SideBarComp';
import MainContentCom from './MainContentCom';
import NavBarSmall from './NavBarSmall';
import TableCom from './TableCom';
import PaginationCom from './PaginationCom';

function ViewPaymentDetailsCom({data, tadleHeader}) {
     const naveData ={
    title: "View Payment Details",
    url:"/manager/costomerdetalspage",
    icon: true, 
    inpul: true,
   }
  return (
    <>
     <div className="flex-1 p-6 ml-56">
        <NavBarSmall data={naveData}/>
        <div className="bg-[#fff7f4] p-4 rounded shadow">

          {/* Table */}
         <TableCom data={data} tadleHeader={tadleHeader} />

          {/* Pagination */}
         <PaginationCom/>
        </div>
      </div>
    </>
  )
}

export default ViewPaymentDetailsCom