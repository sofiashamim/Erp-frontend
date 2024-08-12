import React from 'react'
import { LuPrinter } from "react-icons/lu";
import { GrDocumentText } from "react-icons/gr";
import { FaFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Shipmentslist = () => {
  return (
    <div className='w-100 h-screen pt-3 d-flex flex-col px-5'>
        
      <div className='w-100 h-10 flex flex-row justify-between '> 
<h1 className='fw-bold' style={{fontSize:"22px"}}>Shipment List</h1>
<div className='sub-div w-80 h-10'>
<Link to='/shipmentlist' className='w-28  text-white ms-3 h-10  bg-purple-600' style={{borderRadius:"5px"}}>Shipment List</Link>
<Link to='/addnewshipment' className='w-40 h-10 ms-8 text-white  bg-purple-600 ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Add New Shipment</Link>

</div>
      </div>
      <hr className='bg-slate-700  w-100 mt-3'/>
      <div className='result-up w-100  mt-4 d-flex flex-row justify-between'>
<div className='w-50  flex flex-row gap-4'>
<select className="select h-9 w-56 pl-2 "style={{border:"1px solid  grey", borderRadius:"0.4rem"}}>
    <option selected>    Select Per Page
    </option>
    <option>Per Page-10</option>
    <option >Per Page-30</option>
    <option>Per Page-50</option>
    <option>Per Page-100</option>
</select>
<input type='text'  placeholder='Search' className=" w-56 h-9 pl-3" style={{border:"1px solid grey",borderRadius:"0.4rem"}} />
</div>
<div className='w-64 h-9 d-flex flex-rowjustify-center  gap-4 pt-2'>
<LuPrinter className='' />
<LuPrinter className='' />
<GrDocumentText />
<FaFilePdf />


</div>
      </div>
<div className='w-auto mt-3  ' style={{background:"whitesmoke"}}>
<table class="table  mt-4 bg-white"style={{height:"100vh"}}>
  <thead>
    <tr>
      <th scope="col">SL.</th>
      <th scope="col">Invoice No.</th>
      <th scope="col">Order No.</th>
      <th scope="col">Creater</th>
      <th scope="col">Total QTY</th>
      <th scope="col">Total CM</th>
      <th scope="col">Created AT</th>
      <th scope="col">Action</th>




    </tr>
  </thead>
  <tbody>
    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr> */}
  
  </tbody>
</table>
</div>
    </div>
  )
}

export default Shipmentslist
