import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../sidebar/Sidebar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import "../ManageInventory/createAccess.scss";


const AddBuyer = ({onBuyerCreated}) => {

  const [Buyer, setBuyer] = useState(null);
  const fullNameRef = useRef();
  const roleRef = useRef();
  // const emailRef = useRef();
  const passwordRef = useRef();
  const phoneRef = useRef();
  const userNameRef = useRef();
  const imageRef = useRef();
  const confirmPasswordRef = useRef();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchBuyerById = async () => {
        try {
          const response = await fetch("http://localhost:2000/user/buy/getAllBuyer");
          const data = await response.json();
          const foundBuyer = data.allList.find((item) => item._id === id);
          setBuyer(foundBuyer);

          if (foundBuyer) {
            fullNameRef.current.value = foundBuyer.name;
            roleRef.current.value = foundBuyer.role;
            // emailRef.current.value = foundBuyer.email;
            passwordRef.current.value = foundBuyer.password;
            phoneRef.current.value = foundBuyer.phone;
            userNameRef.current.value = foundBuyer.userName;
            imageRef.current.value = foundBuyer.image;
            confirmPasswordRef.current.value = foundBuyer.confirmPassword;
          }
        } catch (error) {
          console.error("Error fetching Buyer:", error);
        }
      };

      fetchBuyerById();
    }
  }, [id]);

  const handleBuyerSubmit = async (e) => {
    e.preventDefault();

    const obj = {
      name: fullNameRef.current.value,
      role: roleRef.current.value,
      // email: emailRef.current.value,
      password: passwordRef.current.value,
      phone: phoneRef.current.value,
      userName: userNameRef.current.value,
      image: imageRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
    };

    const url = id
      ? `http://localhost:2000/user/buy/update/${id}`
      : "http://localhost:2000/user/buy/register";

    const method = id ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      if (res.ok) {
        const data = await res.json();
        if (onBuyerCreated) {
          onBuyerCreated(data);
        }
        navigate("/buyer");
      } else {
        console.error("Error saving Buyer:", res.statusText);
      }
    } catch (error) {
      console.error("Error saving Buyer:", error);
    }
  };

  return (
//     <div style={{marginLeft:"50px"}}>
//         {/* <Sidebar/> */}
//          <div className="card border-primary col-11 " >
//   <div  className="card-header">  
//   <h5 className="card-title">ADD BUYER</h5>
//   <div style={{marginLeft:"600px"}} class="btn-group" role="group" aria-label="Basic outlined example">
//     <Link to={"/buyer"}>
//   <button type="button" class="btn btn-outline-primary">Buyers list</button>
//     </Link >
//     <Link to={"/addBuyer"}>
//   <button type="button" class="btn btn-outline-primary">Create Buyers</button>
//     </Link>
 
// </div>
// </div>
// <div className="card-body ">
    
    
//     <div style={{display:"flex" , justifyContent:"space-evenly"}} className="container">
//     <div>
//     <div  className="input-wrapper " >
//       <label htmlFor="first">Full Name</label>
//       <input style={{width:"300px"}}  placeholder="first Name" type="text" />
//     </div>
//     <div  className="my-2 ">
//       {/* <label htmlFor="first">Role</label> */}
//       <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
//         <option selected>Role</option>
//         <option value="1">Buyer</option>
//         <option value="2">Buyer</option>
//         <option value="3">Manager</option>
//       </select>
//       {/* <input style={{width:"300px"}}  placeholder="phone" type="text" /> */}
//     </div>
//     <div  className="input-wrapper ">
//       <label htmlFor="first">Password</label>
//       <input style={{width:"300px"}}  placeholder="password" type="text" />
//     </div>
    
//     </div>
//     <div>
//     <div  className="input-wrapper ">
      
//       <label htmlFor="first">Phone</label>
//       <input style={{width:"300px"}}  placeholder="phone" type="text" />
//     </div>
//     <div  className="input-wrapper " >
//       <label htmlFor="first">Buyer Name</label>
//       <input style={{width:"300px"}}  placeholder="Buyer Name" type="text" />
//     </div>
//     <div  className="input-wrapper ">
//       <label htmlFor="first">confirm password</label>
//       <input style={{width:"300px"}}  placeholder="confirm password" type="text" />
//     </div>
//     </div>
//     <div style={{display:"flex",flexDirection:"column"}}>
//     <img style={{borderRadius:"100%",border:"1px solid black",height:"150px",width:"150px"}} src="https://i.pinimg.com/474x/d8/0d/d2/d80dd2f38a99249677afa2cb58757992.jpg" alt="" />
//     {/* <label  htmlFor="">Upload Image</label> */}
//     <input type="file" />
//     </div>
       
//     </div>
    
//       </div>
//       <div style={{padding:"10px" , textAlign:"center"}}>
// <button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-primary btn-lg">Save</button>
// <button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-outline-secondary btn-lg">Cancel</button>
// </div>
// </div>
      
//     </div>
  
<div>
<div className="card border-primary col-11 " style={{ marginLeft: "50px" }}>
        <div className="card-header">
          <h5 className="card-title">{id ? "EDIT BUYER" : "CREATE NEW BUYER"}</h5>
          <div
            style={{ marginLeft: "600px" }}
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <Link to={"/buyer"}>
              <button type="button" className="btn btn-outline-primary">
                Buyer list
              </button>
            </Link>
            <Link to={"/addBuyer"}>
              <button type="button" className="btn btn-outline-primary">
                Add New Buyer
              </button>
            </Link>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleBuyerSubmit}>
            <div style={{ display: "flex", justifyContent: "space-evenly" }} className="container">
              <div>
                <div className="input-wrapper ">
                  <label htmlFor="first">Full Name</label>
                  <input
                    ref={fullNameRef}
                    style={{ width: "300px" }}
                    placeholder="Full Name"
                    type="text"
                  />
                </div>
                <div className="my-2 ">
                  <select
                    ref={roleRef}
                    className="form-select"
                    id="inputGroupSelect04"
                    aria-label="Example select with button addon"
                  >
                    <option value="">Role</option>
                    <option value="Buyer">admin</option>
                    <option value="Buyer">Buyer</option>
                    <option value="Manager">Manager</option>
                  </select>
                </div>
                <div className="input-wrapper ">
                  <label htmlFor="first">Password</label>
                  <input
                    ref={passwordRef}
                    style={{ width: "300px" }}
                    placeholder="Password"
                    type="password"
                  />
                </div>
              </div>
              <div>
                <div className="input-wrapper ">
                  <label htmlFor="first">Phone</label>
                  <input
                    ref={phoneRef}
                    style={{ width: "300px" }}
                    placeholder="Phone"
                    type="text"
                  />
                </div>
                <div className="input-wrapper ">
                  <label htmlFor="first">User Name</label>
                  <input
                    ref={userNameRef}
                    style={{ width: "300px" }}
                    placeholder="User Name"
                    type="text"
                  />
                </div>
                <div className="input-wrapper ">
                  <label htmlFor="first">Confirm Password</label>
                  <input
                    ref={confirmPasswordRef}
                    style={{ width: "300px" }}
                    placeholder="Confirm Password"
                    type="password"
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img
                  style={{
                    borderRadius: "100%",
                    border: "1px solid black",
                    height: "150px",
                    width: "150px",
                  }}
                  src="https://i.pinimg.com/474x/d8/0d/d2/d80dd2f38a99249677afa2cb58757992.jpg"
                  alt=""
                />
                <input type="file" ref={imageRef} />
              </div>
            </div>
            <div style={{ padding: "10px", textAlign: "center" }}>
              <button
                style={{ width: "150px", marginRight: "5px" }}
                type="button"
                className="btn btn-outline-secondary btn-lg"
                onClick={() => navigate("/buyer")}
              >
                Cancel
              </button>
              <button
                style={{ width: "150px", marginRight: "5px" }}
                type="submit"
                className="btn btn-primary btn-lg"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
</div>

)
}

export default AddBuyer
