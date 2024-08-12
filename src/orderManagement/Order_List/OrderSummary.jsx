import React from 'react'
import { Link } from 'react-router-dom'
import { LuPrinter } from "react-icons/lu";
import { GrDocumentText } from "react-icons/gr";
const OrderSummary = () => {
  return (
    <div className='w-full bg-white  pl-2'>
      
      <div className='w-full   flex  justify-between mt-3'>
        <h2 className='mt-3' style={{fontWeight:"bold",fontSize:"20px"}}>
          Order Summary
        </h2>

<div className='link-box w-80 h-10 flex  mt-3 gap-5'style={{border:"1px solid purple",borderLeft:"none",borderRight:"none",borderTop:"none"}}> 
<Link to='/orderlist' className='ordersummary h-10 w-40 pl-3 pt-2 text-white bg-purple-500'>Order Summary
</Link>
<Link to='/addneworder'className='ordersummary h-10 w-40 pl-5 pt-2 text-white bg-purple-500'> Add New Order 
</Link>
</div>
      </div>
      {/* form */}
      <div className='form w-100    bg-white mt-14 h-20 d-flex p-3 gap-2 ' style={{}}>
      <select className="select h-11 w-60  "style={{border:"1px solid  grey", borderRadius:"0.4rem"}}>
    <option selected className='pl-2'>    Select Per Page
    </option>
    <option>Per Page-10</option>
    <option >Per Page-30</option>
    <option>Per Page-50</option>
    <option>Per Page-100</option>
</select>
<input className='h-11 w-60  ms-3 p-2 ps-4 ' style={{border:"1px solid  grey", borderRadius:"0.6rem"}} type='text' placeholder='Search...' />

  <div className='w-60 h-15  bg-white   flex flex-row ' style={{position:"relative"}}>
                        <p className='w-10 whitespace-nowrap  pt-2' style={{ fontSize: "13px" }}>From Date</p>
                        <input type='date' placeholder='Enter Payment Mode ' className='w-60  pl-16 text-center h-10 ms-10' style={{ outline: "none",borderRadius:"0.4rem" }} />
                    </div>
                    <div className='w-60  h-15  bg-white   flex flex-row ' style={{ }}>
                        <p className='w-16 ms-5 bg-white  whitespace-nowrap pt-2 ' style={{ fontSize: "13px"}}>To Date</p>
                        <input type='date' placeholder='Enter Payment Mode' className='w-48 text-start   h-10 ' style={{ outline: "none" ,borderRadius:"0.4rem"}} />
                    </div>


<div className='w-40 flex  justify-center gap-1 items-center'>
<LuPrinter className='text-red-400' style={{fontSize:"20px"}} />
<LuPrinter className='text-green-400'  style={{fontSize:"20px "}} />
<GrDocumentText style={{fontSize:"20px"}} />
<GrDocumentText  className='text-red-500' style={{fontSize:"20px"}} />


</div>
      </div>
      <table class=" w-full    mt-5"  >
                  <thead class="bg-gray-50  " style={{fontWeight:"bold"}}>
                    <tr className=' bg-slate-100  h-12'>
                      <th
                        scope="col"
                
                      >
                        <span>Sl.</span>
                      </th>
                      <th
                        scope="col"
                     >
                    Order No.
                      </th>
                      <th
                        scope="col"
                   
                      >
                        Image
                      </th>
                      <th
                        scope="col"
                       
                      >
                        Party Name
                      </th>
                      <th
                        scope="col"
                      
                      >
                       Merchandiser
                      </th>
                      <th
                        scope="col"
                 
                      >
                 GSM
                      </th>
                      <th
                        scope="col"
                
                      >
                 Shipment Mode
                    </th>
                    <th
                        scope="col"
                  
                      >
             payment mode
                    </th>
                    <th
                        scope="col"
              
                      >
                     Year
                    </th>
                    <th
                        scope="col"
       
                      >
           Season
                    </th>
                    
                    <th
                        scope="col"
              
                      >
              Total Qty
                    </th>
                    <th
                        scope="col"
                
                      >
            	Total Unit Price
                    </th>
                    <th
                        scope="col"
                
                      >
              status
                    </th>
                    <th
                        scope="col"
                 
                      >
            Action
                    </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td class="whitespace-nowrap px-4 py-4">
                        <div class="flex items-center">
                      
                         
                        </div>
                      </td>
                    
                    
                   
                    </tr>
                    <tr>
                   
                      
                   
                     
                    </tr>
                  </tbody>
                </table>    </div>
  )
}

export default OrderSummary









