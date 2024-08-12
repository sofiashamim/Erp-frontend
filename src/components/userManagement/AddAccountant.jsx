import React from 'react'
import { Link } from 'react-router-dom'

const AddAccountant = () => {
  return (
    <div>
       <div className="card border-primary col-11 " style={{marginLeft:"50px"}}>
  <div  className="card-header">  
  <h5 className="card-title">ADD ACCOUNTANT</h5>
  <div style={{marginLeft:"600px"}} class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary"><Link to="/accountant">Accountant list</Link></button>
  <button type="button" class="btn btn-outline-primary">Create Accountant</button>
 
</div>
</div>
  {/* <div className="card-body ">
    
    
<div style={{display:"flex"}} className="container">
<div>
<form>
  <div style={{display:"flex",gap:"10px"}}>
    
  <div  className="input-wrapper col-md-4" >
  <label htmlFor="first">Full Name</label>
  <input style={{width:"50px"}} placeholder="Accessory Name" type="text" />
</div>
<div  className="input-wrapper col-md-4">
  <label htmlFor="first">Phone</label>
  <input style={{width:"50px"}} placeholder="phone" type="text" />
</div>
  </div>

  <div style={{display:"flex"}}>

  <div style={{height:"50px",marginLeft:"10px",marginTop:"10px",width:"50px"}} class="input-group">
  <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
    <option selected>Role</option>
    <option value="1">Admin</option>
    <option value="2">Buyer</option>
    <option value="3">Manager</option>
  </select>
  <button class="btn btn-outline-secondary" type="button">+</button>
</div>
    
  <div  className="input-wrapper col-md-6 " >
  <label htmlFor="first">User Name</label>
  <input placeholder="User name" type="text" />
</div>
  </div>

  <div style={{display:"flex"}}>
    
  <div  className="input-wrapper col-md-4" >
  <label htmlFor="first">Password</label>
  <input placeholder="Password" type="text" />
</div>
<div  className="input-wrapper col-md-4">
  <label htmlFor="first">Confirm Password</label>
  <input placeholder="Description" type="text" />
</div>
  </div>

<div style={{padding:"10px"}}>
<button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-primary btn-lg">Save</button>
<button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-outline-secondary btn-lg">Cancel</button>
</div>
</form>
</div>

<div>
<img style={{borderRadius:"100%",border:"1px solid black",height:"200px",width:"200px"}} src="https://i.pinimg.com/474x/d8/0d/d2/d80dd2f38a99249677afa2cb58757992.jpg" alt="" />
<label style={{marginLeft:"680px",marginTop:"310px"}} htmlFor="">Upload Image</label>
<input type="file" />
</div>
   
</div>

  </div> */}
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

export default AddAccountant
