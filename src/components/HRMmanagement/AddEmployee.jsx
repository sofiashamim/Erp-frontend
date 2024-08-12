import React from 'react';
import { Link } from 'react-router-dom';

const AddEmployee = () => {
  return (
    <div>
      <div className="card border-primary col-11" style={{ marginLeft: "50px", marginTop: "50px" }}>
        <div className="card-header">
          <h5 className="card-title">ADD EMPLOYEE</h5>
          <div style={{ marginLeft: "800px", marginBottom: "20px" }} className="btn-group" role="group" aria-label="Basic outlined example">
          <Link to="/employee">
  <button type="button" class="btn btn-outline-primary">Employee list</button>
  </Link>
          </div>
        </div>
        <div className="card-body">
          <form>
            <div className="row mb-3">
              <div className="col">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Phone number" />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Email" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <input type="text" className="form-control" placeholder="Address" />
              </div>
              <div className="col">
                <select className="form-control">
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="col">
                <select className="form-control">
                  <option value="">Employment Type</option>
                  <option value="part_time">Part Time</option>
                  <option value="full_time">Full Time</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <input type="date" className="form-control" placeholder="Birth Date" />
              </div>
              <div className="col">
                <input type="date" className="form-control" placeholder="Joining Date" />
              </div>
              <div className="col">
                <select className="form-control">
                  <option value="">Designation</option>
                  <option value="sublimacion">Sublimacion</option>
                  <option value="manager">Manager</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <input type="text" className="form-control" placeholder="Salary" />
              </div>
              <div className="col">
                <input type="file" className="form-control" placeholder="NID/Passport" />
              </div>
              <div className="col">
                <input type="file" className="form-control" placeholder="NID/Passport Back" />
              </div>
            </div>
          </form>
          <div style={{padding:"10px", marginLeft:"300px",marginTop:"10px"}}>
<button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-outline-secondary btn-lg">Reset</button>
<button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-primary btn-lg">Save</button>
</div>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
