import React from 'react'
import { LuPrinter } from "react-icons/lu";
import { GrDocumentText } from "react-icons/gr";
import { FaFilePdf } from "react-icons/fa6";
import { FaFileCsv } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Addnewshipmentlist = () => {
  return (
    <div className='w-100 h-screen pt-3 d-flex flex-col px-5'>
        
      <div className='w-100 h-10 flex flex-row justify-between '> 
<h1 className='fw-bold'style={{fontSize:"22px"}}>Add new  Shipment</h1>

<div className='link-box w-80 h-10 flex flex-row  me-5 gap-5'style={{border:"1px solid purple",borderLeft:"none",borderRight:"none",borderTop:"none"}}> 
<Link to='/shipmentlist' className='ordersummary h-10 w-60 pl-7 pt-2 pr-1  text-white bg-purple-500'>Shiment List
</Link>
<Link to='/addnewshipment'className='ordersummary h-10 w-60 pl-2 pt-2 text-white bg-purple-500'> Add New Shipment
</Link>
</div>
      </div>
      <hr className='bg-slate-700  w-75 mt-3'/>
      <div className='result-up w-100 pl-40   mt-6 d-flex flex-row justify-between'>
<div className='w-auto  flex flex-row gap-4'>
<select className="select h-9 w-80 pl-2 "style={{border:"1px solid  grey", borderRadius:"0.4rem"}}>
    <option selected>    Select  a Order
    </option>
    <option>0000002</option>
   
</select>
<input type='text'  placeholder='Search' className=" w-80 h-9 pl-3" style={{border:"1px solid grey",borderRadius:"0.4rem"}} />
</div>

      </div>
      <div className=' w-96 flex flex-row gap-3 ms-96 mt-4' >
    <button className=' btn btn-join w-48 h-11 bg-white' style={{borderRadius:"5px",border:"1px solid black"}}>Cancel</button>
    <button className='w-48 h-11 text-white bg-purple-500' style={{borderRadius:"5px"}}>Save</button>

</div>

    </div>
  )
}

export default Addnewshipmentlist
