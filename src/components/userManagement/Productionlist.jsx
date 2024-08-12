import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'; 
import { Link } from 'react-router-dom';

const ProductionList = () => {
    const data = [
        {
          id: 1,
          name: 'rr',
          unit:'PESO',
          price:'$12.00',
          description:'silk',
          status: <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
</div>,
          action: <MoreVertIcon/>,
         },
      
        ];
  return (
    <div>
       <div className="row" >
        <div style={{marginLeft:"50px",marginTop:"100px"}} className="col-11">
          <div className="card">
            <div className="card-content">
              {/* <div className="card-body titleHead">
                <h4 className="card-title">
                  production LIST 
                  
                </h4>
                
                <div id='groupBtn' class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary">production list</button>
  <button to="/createAccess" type="button" class="btn btn-outline-primary">Create production</button>
 
</div>
              </div> */}
                    <div style={{display:"flex"}} className="card-body titleHead">
                <h4  className="card-title">
                production LIST                  
                </h4>
                <div style={{flexDirection: "row",
    alignItems: "baseline"}} id='groupBtn' class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary">production list</button>
  <button type="button" class="btn btn-outline-primary"><Link to="/addproduction">Add New production</Link></button>
 
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
                <th>Unit</th>
                <th>Price</th>
                <th>Description</th>
                <th>Status</th>
                <th>Action</th>
                
                
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.unit}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td>{item.status}</td>
                  <td>{item.action}</td>
                  {/* <td>{item.perDeliveryCharge}</td> */}
                  
                
               
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

export default ProductionList