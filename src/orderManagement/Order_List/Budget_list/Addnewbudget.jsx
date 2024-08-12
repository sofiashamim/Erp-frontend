import React from 'react'
import { FaBars } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { BsFiletypeScss } from "react-icons/bs";
const Addnewbudget = (props) => {
  console.log(props.prop);

  return (
    <div className='w-full bg-red ' style={{height:"100%"}}>

      <div className='w-auto h-16 flex flex-row  gap-10 ms-2' style={{height:"100vh"}}>
        {/* main div */}
<div className=' w-96 sub-div  mt-4 flex flex-col gap-5'> 
<div className='w-96  flex flex-row'>
    {/* <label>Party name</label> */}
<select className="select  text h-11 w-96 "style={{border:"1px solid  grey",outline:"none" }}>
    <option selected>Select a  Order No
    </option>
    <option>0000005</option>
    <option >0000003</option>
    <option >0000002</option>
    <option >0000001</option>

  


</select>
</div>
<div className='w-96 h-   flex flex-row'>
    {/* <label>Party name</label> */}
<select className="select text-center h-11 w-96 "style={{border:"1px solid  grey",outline:"none" }}>
    <option selected>Select Order First
    </option>
    <option>Style(Select Order First)</option>
  

  


</select>
</div>
<div className='w-auto h-15  bg-white   flex flex-row 'style={{border:"1px solid grey"}}>
    <label className='w-36 pl-2 bg-white ms-5 mt-1 pt-2' style={{fontSize:"13px"}}>Pre Costing Date</label>
  <input type='date' placeholder='Enter Booking date' className='w-60 text-center h-10 ms-3' style={{outline:"none",}} />
  </div>
  <div className='w-auto h-15  bg-white   flex flex-row 'style={{border:"1px solid grey"}}>
    <label className='w-36 pl-2 bg-white ms-5 mt-1 pt-2' style={{fontSize:"13px"}}>Post Costing Date</label>
  <input type='date' placeholder='Enter Booking date' className='w-60 text-center h-10 ms-3' style={{outline:"none"}} />
  </div>
<div className='w-auto h-15  bg-white   flex flex-row ' style={{border:"1px solid grey"}}>
  <input type='  number' placeholder='process Loss' className='w-80 h-10'  style={{outline:"none"}}/>
  </div>
  <div className='w-auto h-15  bg-white   flex flex-row ' style={{border:"1px solid grey"}}>
  <input type='text' placeholder='Rib' className='w-80 h-10'  style={{outline:"none"}}/>
  </div>
 
  
 
</div>
{/* second-col */}
<div className=' w-96 sub-div ms-2 mt-4 flex flex-col gap-5'> 


<div className='w-auto h-15  bg-white   flex flex-row 'style={{border:"1px solid grey"}}>
    <label className='w-36 pl-2 bg-white ms-5 mt-1 pt-2' style={{fontSize:"13px"}}>Payment Mode</label>
  <input type='text' placeholder=' Booking date' className='w-60 text-center h-10 ms-3' style={{outline:"none",}} />
  </div>
  <div className='w-auto h-15  bg-white   flex flex-row 'style={{border:"1px solid grey"}}>
    <label className='w-36 pl-2 bg-white ms-5 mt-1 pt-2' style={{fontSize:"13px"}}>Party Name</label>
  <input type='text' placeholder='Party Name' className='w-60 text-center h-10 ms-3' style={{outline:"none",}} />
  </div>
  <div className='w-auto h-15  flex flex-row 'style={{border:"1px solid grey"}}>
    <label className='w-36 pl-2 bg-white ms-5 mt-1 pt-2' style={{fontSize:"13px"}}>Color</label>
  <input type='color' placeholder='Party Name' className='w-60 text-center h-10 ms-3' style={{outline:"none",}} />
  </div>
  <div className='w-auto h-15  bg-white   flex flex-row 'style={{border:"1px solid grey"}}>
    <label className='w-36 pl-2 bg-white ms-5 mt-1 pt-2' style={{fontSize:"13px"}}>Shipment Date</label>
  <input type='date' placeholder='Enter Booking date' className='w-60 text-center h-10 ms-3' style={{outline:"none",}} />
  </div>
  <div className='w-auto h-15  bg-white   flex flex-row 'style={{border:"1px solid grey"}}>
    <label className='w-36 pl-2 bg-white ms-5 mt-1 pt-2' style={{fontSize:"13px"}}>Quantity</label>
  <input type='number' placeholder='Enter Booking date' className='w-60 text-center h-10 ms-3' style={{outline:"none"}} />
  </div>
  <div className='w-auto h-15  bg-white   flex flex-row 'style={{border:"1px solid grey"}}>
    <label className='w-36 pl-2 bg-white ms-5 mt-1 pt-2' style={{fontSize:"13px"}}>Unit Price</label>
  <input type='number' placeholder='Enter Booking date' className='w-60 text-center h-10 ms-3' style={{outline:"none"}} />
  </div>
  <div className='w-auto h-15  bg-white   flex flex-row 'style={{border:"1px solid grey"}}>
    <label className='w-36 pl-2 bg-white ms-5 mt-1 pt-2' style={{fontSize:"13px"}}>LC Value</label>
  <input type='text' placeholder='Enter Booking date' className='w-60 text-center h-10 ms-3' style={{outline:"none"}} />
  </div>
</div>
{/* Third col */}
<div className='mb-4 w-96 bg-white sub-div ms-2 mt-1  flex flex-col gap-5'> 
<div className='w-96    flex flex-row' >
<label htmlFor="upload" className="upload-img mt-2">
    <p className=' ms-2'>    Upload Item Image
    </p>
  <input type="file" name="image" id="upload" accept="image/*" className="d-none file-input-change" data-id="image" />
  <i><img src="https://erpsoftware.acnoo.com/assets/images/icons/upload.png" id="image" className="img-preview h-48 w-96 " style={{border:"2px solid  grey",borderRadius:"10px"}} /></i>
</label>



</div>


</div>


      </div> 
   

{/* table */}
<div className="responsive-table m-0">
  <table className="table table-bordered small-table">
    <thead>
      <tr>
        <th>Accessories - Description</th>
        <th>supplier name</th>
        <th>unit price ($)</th>
        <th>unit (in number)</th>
        <th>Consumption/ Pc</th>
        <th>W%</th>
        <th>Total Qty</th>
        <th>Total Cost</th>
        <th>pre-Cost%</th>
      </tr>
    </thead>
    <tbody>
      <tr className="position-relative">
        <td><div className="add-btn-six"><i className="fal fa-plus" aria-hidden="true" /></div></td>
        <td><div className="tr-remove-btn remove-six"><i className="fas fa-trash" /></div></td>
      </tr>
      <tr className="duplicate-six">
        <td><input type="text" name="accessories_desc[accessories_des][]" className="form-control clear-input" placeholder="Accessories" /></td>
        <td><input type="text" name="accessories_desc[supplier_name][]" className="form-control clear-input" placeholder="Supplier" /></td>
        <td><input type="number" step="any" name="accessories_desc[unit_price][]" className="form-control count-total accessories-unit-price 0" data-length={0} defaultValue={0} placeholder="Unit Price" /></td>
        <td><input type="text" name="accessories_desc[unit_number][]" className="form-control clear-input" placeholder="Units" /></td>
        <td><input type="text" name="accessories_desc[consumption][]" className="form-control clear-input" placeholder="Consumptions" /></td>
        <td><input type="text" name="accessories_desc[w][]" className="form-control clear-input" placeholder="W%" /></td>
        <td><input type="number" step="any" name="accessories_desc[total_qty][]" className="form-control count-total accessories-qty 0" data-length={0} defaultValue={0} placeholder="Total Qty" /></td>
        <td><input type="number" step="any" readOnly name="accessories_desc[total_cost][]" className="form-control accessories-cost 0" data-length={0} defaultValue={0} placeholder="Total Cost" /></td>
        <td><input type="number" step="any" readOnly name="accessories_desc[pre_cost][]" className="form-control accessories-pre-cost 0" data-length={0} defaultValue={0} placeholder="Pre-Cost" /></td>
      </tr>
      <tr>
        <td><b>Total Accessories cost</b></td>
        <td colSpan={5} />
        <td><b className="total-accessories-qty clear">0</b></td>
        <input type="hidden" name="accessories_qty" id="accessories_qty" defaultValue={0} />
        <td><b className="total-accessories-cost clear">0</b></td>
        <input type="hidden" defaultValue={0} name="accessories_cost" id="accessories_cost" />
        <td><b className="total-accessories-pre-cost clear">0</b></td>
        <input type="hidden" name="pre_cost_desc[accessories]" id="pre_cost_desc_accessories" />
      </tr>
      <tr>
        <td colSpan={7}><b>Total Fabric &amp; Accessories Cost</b></td>
        <td><b className="total-making-cost clear">0</b></td>
        <input type="hidden" name="total_making_cost" id="total_making_cost" defaultValue={0} />
        <td><b className="total-making-pre-cost clear">0</b></td>
        <input type="hidden" name="total_making_pre_cost" id="total_making_pre_cost" />
      </tr>
      <tr>
        <td>Finance/Commercial &amp; Logistic Cost</td>
        <td colSpan={4} />
        <td><input type="number" step="any" name="finance_value" defaultValue={0} className="finance-value" placeholder="1.70%" /></td>
        <td />
        <td><input type="number" step="any" readOnly name="finance_cost" defaultValue={0} className="finance-cost" placeholder="Cost" /></td>
        <td><input type="number" step="any" readOnly name="finance_pre_cost" defaultValue={0} className="finance-pre-cost" placeholder="Pre cost" /></td>
      </tr>
      <tr>
        <td>Deferred payment with interest</td>
        <td colSpan={4} />
        <td><input type="number" step="any" name="deferred_value" defaultValue={0} className="deferred-value" placeholder="1.70%" /></td>
        <td />
        <td><input type="number" step="any" readOnly name="deferred_cost" defaultValue={0} className="deferred-cost" placeholder="Cost" /></td>
        <td><input type="number" step="any" readOnly name="deferred_pre_cost" id="pre_cost" defaultValue={0} className="deferred-pre-cost" placeholder="Pre cost" /></td>
      </tr>
      <tr>
        <td>Other Cost</td>
        <td colSpan={6} />
        <td colSpan={2}><input type="number" step="any" name="other_cost" id="other_cost" placeholder={0} /></td>
      </tr>
      <tr>
        <td colSpan={7}><b>Grand total</b></td>
        <td><b className="grand-total-cost clear">0</b></td>
        <input type="hidden" name="grand_cost" id="grand_cost" defaultValue={0} />
        <td><b className="grand-total-pre-cost clear">0</b></td>
        <input type="hidden" name="pre_cost_desc[grand]" id="pre_cost_desc_grand" />
      </tr>
    </tbody>
  </table>
</div>


<div className='w-full grid  h-9 mt-10 grid-cols-12 px-3'>
<div className='border col-span-10'> 
FACTORY CM TOTAL</div>
<div className='border'>0</div>
<div className='border'>0</div>
</div>

<div className='w-full grid  h-9 mt-4 grid-cols-12 px-3'>
<div className='border col-span-10'>TOTAL EXPENSE</div>
<div className='border'>0</div>
<div className='border'>0</div>
</div>
<div className='w-full grid  h-9 mt-4 grid-cols-12 px-3'>
<div className='border col-span-10'>NET EARNING</div>
<div className='border'>0</div>
<div className='border'>0</div>
</div>


<div className=' w-full  flex  my-10 '>
    <button className='w-48 h-11 m-auto text-white bg-purple-500' style={{borderRadius:"5px"}}>Save</button>

</div>
    </div>
  )
}

export default Addnewbudget
