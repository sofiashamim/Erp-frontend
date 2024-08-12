import React from 'react'
import Sidebar from '../sidebar/Sidebar';
import { Link } from 'react-router-dom';

const AddBuyer = () => {
  return (
    <div style={{marginLeft:"50px"}}>
        {/* <Sidebar/> */}
         <div className="card border-primary col-11 " >
  <div  className="card-header">  
  <h5 className="card-title">ADD BUYER</h5>
  <div style={{marginLeft:"600px"}} class="btn-group" role="group" aria-label="Basic outlined example">
    <Link to={"/buyer"}>
  <button type="button" class="btn btn-outline-primary">Buyers list</button>
    </Link >
    <Link to={"/addBuyer"}>
  <button type="button" class="btn btn-outline-primary">Create Buyers</button>
    </Link>
 
</div>
</div>
<div className="card-body ">
    
    
    <div style={{display:"flex" , justifyContent:"space-evenly"}} className="container">
    <div>
    <div  className="input-wrapper " >
      <label htmlFor="first">Full Name</label>
      <input style={{width:"300px"}}  placeholder="first Name" type="text" />
    </div>
    <div  className="my-2 ">
      {/* <label htmlFor="first">Role</label> */}
      <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
        <option selected>Role</option>
        <option value="1">Admin</option>
        <option value="2">Buyer</option>
        <option value="3">Manager</option>
      </select>
      {/* <input style={{width:"300px"}}  placeholder="phone" type="text" /> */}
    </div>
    <div  className="input-wrapper ">
      <label htmlFor="first">Password</label>
      <input style={{width:"300px"}}  placeholder="password" type="text" />
    </div>
    
    </div>
    <div>
    <div  className="input-wrapper ">
      
      <label htmlFor="first">Phone</label>
      <input style={{width:"300px"}}  placeholder="phone" type="text" />
    </div>
    <div  className="input-wrapper " >
      <label htmlFor="first">Admin Name</label>
      <input style={{width:"300px"}}  placeholder="Admin Name" type="text" />
    </div>
    <div  className="input-wrapper ">
      <label htmlFor="first">confirm password</label>
      <input style={{width:"300px"}}  placeholder="confirm password" type="text" />
    </div>
    </div>
    <div style={{display:"flex",flexDirection:"column"}}>
    <img style={{borderRadius:"100%",border:"1px solid black",height:"150px",width:"150px"}} src="https://i.pinimg.com/474x/d8/0d/d2/d80dd2f38a99249677afa2cb58757992.jpg" alt="" />
    {/* <label  htmlFor="">Upload Image</label> */}
    <input type="file" />
    </div>
       
    </div>
    
      </div>
      <div style={{padding:"10px" , textAlign:"center"}}>
<button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-primary btn-lg">Save</button>
<button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-outline-secondary btn-lg">Cancel</button>
</div>
</div>
      
    </div>
  )
}

export default AddBuyer
