import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaUserAlt } from 'react-icons/fa';
import { GrDocumentPdf } from 'react-icons/gr';
import { BsFiletypeScss } from 'react-icons/bs';
import { FiPrinter } from 'react-icons/fi';
import { PiArrowCounterClockwise } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
const BuyerDue = () => {

    const [showProfile, setshowProfile] = useState(false);
  return (
    <div>
       
      {/* inner divjnfdvjkdshfjv */}

      <div className='w-full px-4'>

      <div className='w-full h-20 flex items-center text-lg'>
<p>Buyer Due List</p>
      </div>
      <hr className='bg-slate-700  w-full px4' />





      <div className='w-52 h-28 bg-red-200 mt-4 mb-20 rounded-lg flex flex-col justify-center text-black text-lg'>
        <p className='ms-3 font-bold  '>&111000.00</p>
        <p className='ms-3'>Due Amount</p>

      </div>




      <div className=' flex justify-between items-center gap-4 mt-7 px-4 h-10'>
    <div className='flex gap-4'>
      <div className='flex items-center gap-3'>
    
      <select className=" h-8 w-36 " style={{ border: "1px solid  grey", outline: "none", borderRadius: "5px" }}>
        <option>Per Page-10</option>
        <option>Per Page-30</option>
        <option>Per Page-50</option>
        <option>Per Page-100</option>
      </select>
      </div>
      <div className='flex items-center gap-3'>
    
      <input type='text' className=' h-8 w-36 text-start px-2' placeholder='Search...' style={{ border: "1px solid grey", borderRadius: "5px" }} />
       
      </div>
    </div>
    
    <div className='flex gap-2'>
      <p className='w-6 h-6 bg-green-200 flex justify-center items-center'>

        <GrDocumentPdf />
      </p>
      <p  className='w-6 h-6 bg-green-200 flex justify-center items-center'>

        <BsFiletypeScss />
      </p>
      <p  className='w-6 h-6 bg-red-200 flex justify-center items-center'>
        <FiPrinter/>
      </p>

        </div>
      </div>



      <div className='w-full flex justify-around items-center bg-slate-200 h-10 mt-6'>
        <p>SL.</p>
       
        <p>Party Name</p>
       
        <p>Party Type</p>
        <p>Phone</p>
        <p>Address</p>
        <p>Due Amount</p>
        <p>Remarks</p>   
      </div>
      <div className='w-full flex justify-around items-center bg-white h-10 border'>
        
        <p>1</p>
       
        <p>000-b2</p>
       
        <p>56465</p>
        <p>524674</p>
        <p>hello</p>
        <p>200</p>
        <p>300</p>   
      </div>
      <div className='w-full flex justify-around items-center bg-white h-10 border'>
        <p>2</p>
       
        <p>NR</p>
       
        <p>35264</p>
        <p>Phone</p>
        <p>nisjh</p>
        <p>200</p>
        <p>100s</p>   
      </div>
      </div>
    </div>
  )
}

export default BuyerDue