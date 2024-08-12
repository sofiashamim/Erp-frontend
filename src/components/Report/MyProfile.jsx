

import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaUserAlt } from 'react-icons/fa';
import { PiArrowCounterClockwise } from 'react-icons/pi';
import { FaUser } from 'react-icons/fa';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
const MyProfile = () => {
    const [showProfile, setshowProfile] = useState(false);
    
  return (
    <div>




    
   
       
        
   
   
 
    <div>
        

      {/* middle div fmdnsdkajfhnsdf */}


        <div id='file' className='w-full mt-10 px-5 flex gap-10 '>
            
            <div className='w-96 hightprofile ml-10 border bg-white shadow-lg'>
                <div className='w-full'>
                    <img className='w-full image' src="https://erpsoftware.acnoo.com/assets/images/profile/cover-photo.jpg" alt="" />
                </div>
                <div className='grid grid-rows-3 p-2  rounded-lg mt-9 h-32'>
                    <div className='border brdnone rounded-t-lg'>Name: Super Admin</div>
                    <div className='border'>Email: superadmin@superadmin.com</div>
                    <div className='border rounded-b-lg'>Registration Date: 11 Jul, 2024</div>
                </div>
            </div>
            {/* right div cvkmsdhahbfsdzcv */}
            <div className='min-w-[45rem] border-2 mb-20  rounded-lg bg-white shadow-lg'>
                <div className='flex flex-col gap-3 px-4 '>
                    <p className='mt-4'>User Profile</p>
                    <hr className='bg-slate-700  w-full ' />
                    <div className='w-full flex flex-col gap-1 justify-between '>
                        <p className=' ' htmlFor="">Name</p>
                        <input className='w-96 h-9 outline-slate-200 border text-start px-2 rounded-lg' type="text" placeholder='name' />
                    </div>

                    <div className='w-full flex flex-col gap-1 justify-between '>
                        <p htmlFor="">Email</p>
                        <input className='w-96 h-9 outline-slate-200 border text-start px-2 rounded-lg' type="email" />
                    </div>


                    <div className='w-full flex flex-col gap-1 justify-between '>
                        <p htmlFor="">Profile Picture</p>
                        <input className='w-96 h-9 outline-slate-200 border text-start px-2 rounded-lg ' type="file" />
                    </div>


                    <div className='w-full flex flex-col gap-1 justify-between '>
                        <p htmlFor="">Current Password</p>
                        <input className='w-96 h-9 outline-slate-200 border text-start px-2 rounded-lg' type="password"  placeholder='Enter Current Password'/>
                    </div>

                    <div className='w-full flex flex-col gap-1 justify-between '>
                        <p htmlFor="">New Password</p>
                        <input className='w-96 h-9 outline-slate-200 border text-start px-2 rounded-lg' type="password" placeholder='Enter New Password' />
                    </div>


                    <div className='w-full flex flex-col gap-1 justify-between '>
                        <p htmlFor="">Confirm password</p>
                        <input  className='w-96 h-9 outline-slate-200 border text-start px-2 rounded-lg' type="password" placeholder='Enter Confirm password' />
                    </div>


                 


                  
                </div>
                <div className=' w-full  flex  mt-20 mb-10 px-3'>
    <button  className='w-48 h-11  text-white bg-purple-500' style={{borderRadius:"5px"}}>Save</button>

</div>

            </div>
        </div>
    </div>



    </div>
  )
}

export default MyProfile