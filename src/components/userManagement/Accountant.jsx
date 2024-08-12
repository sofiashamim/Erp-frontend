import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

const Accountant = () => {

    const data = [
        {
          id: 1,
          name: 'rr',
          phone:'PESO',
          userName:'$12.00',
          action: <MoreVertIcon/>,
         }]
  return (
    <div>
      <div className="row" >
        <div style={{marginLeft:"50px",marginTop:"100px"}} className="col-11">
          <div className="card">
            <div className="card-content">
              {/* <div style={{display:"flex"}} className="card-body titleHead">
                <h4  className="card-title">
                 MERCHANDISER LIST
                  
                </h4>

                <div style={{marginTop:"100px",marginRight:"100px"}} class="dropdown">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    All result
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
                
                <div style={{position:"fixed",marginLeft:"600px"}} id='groupBtn' class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary">Merchandiser list</button>
  <button type="button" class="btn btn-outline-primary">Add New Merchandiser</button>
 
</div>
              </div> */}
                    <div style={{display:"flex"}} className="card-body titleHead">
                <h4  className="card-title">
                ACCOUNTANT LIST                  
                </h4>
                <div style={{flexDirection: "row",
    alignItems: "baseline"}} id='groupBtn' class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary">Accountant list</button>
  <button type="button" class="btn btn-outline-primary"><Link to="/addacc">Add New Accountant</Link></button>
 
</div>
              </div>
              <hr />
              <div style={{display:"flex"}}>
              <div style={{marginLeft:"10px",alignSelf:"center"}} class="dropdown mx-4">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    All result
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<div>
  <input type="text" class="form-control" placeholder="search"/>
</div>
              </div>
        <div className="table-responsive">
          <table className="table mb-0">
            <thead>
              <tr>
                <th>SL.</th>
                <th>Name</th>
                <th>Phone</th>
                <th>User Name</th>
                <th>Action</th>
                
                
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.userName}</td>
                  <td>{item.action}</td>
              
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accountant
