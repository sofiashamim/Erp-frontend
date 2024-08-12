import React from 'react'
import { Link } from 'react-router-dom'

const PayS = () => {
  return (
    <div>
      <div className="card border-primary col-11 " style={{marginLeft:"50px",marginTop:"50px"}}>
      <div  className="card-header">  
  <h5 className="card-title">PAY SALARY</h5>
  <div style={{marginLeft:"800px",marginBottom:"20px"}} class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary"><Link to="/salarylist">Salary list</Link></button>
  
</div>
</div>
<div  className="card-body ">
<form>
  <div className="container" style={{display:"flex",gap:"10px"}}>
    
  <div style={{height: "50px",marginLeft:"20px",marginTop:"10px",width:"400px"}} className="input-group">
  <select className="form-select" id="inputGroupSelect04" >
    <option selected>Select Employee</option>
    <option value={1}>Test</option>
    <option value={2}>...</option>
   
  </select>
</div>
<div  className="input-wrapper col-md-6">
  <label htmlFor="first">Salary Amount</label>
  <input style={{width:"400px"}} placeholder="phone" type="text" />
</div>
  </div>

  <div style={{display:"flex"}}>
  <div style={{height: "50px",marginLeft:"30px",marginTop:"10px",width:"400px"}} className="input-group">
  <select className="form-select" id="inputGroupSelect04" >
    <option selected>Salary Year</option>
    <option value={1}>Test</option>
    <option value={2}>...</option>
   
  </select>

</div>
<div style={{height: "50px",marginLeft:"20px",marginTop:"10px",width:"400px"}} className="input-group">
  <select className="form-select" id="inputGroupSelect04" >
    <option selected>Salary Month</option>
    <option value={1}>Test</option>
    <option value={2}>...</option>
   
  </select>

</div>
 
  </div>

  <div style={{display:"flex"}}>
    
  <div style={{height: "50px",marginLeft:"20px",marginTop:"10px",width:"400px"}} className="input-wrapper col-md-6">
  <label htmlFor="first">Payment Method</label>
  <input style={{width:"400px"}} placeholder="Payment method" type="text" />
</div>
<div style={{height: "50px",marginLeft:"20px",marginTop:"10px",width:"400px"}} className="input-wrapper col-md-6">
  <label htmlFor="first">Notes</label>
  <input style={{width:"400px"}} placeholder="Notes" type="text" />
</div>
  </div>

<div style={{padding:"10px", marginLeft:"250px",marginTop:"10px"}}>
<button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-primary btn-lg">Save</button>
<button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-outline-secondary btn-lg">Cancel</button>
</div>
</form>
</div>
     
      </div>

    </div>
  )
}

export default PayS
