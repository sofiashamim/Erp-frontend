import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import "../ManageInventory/createAccess.scss";

const AddMerchandiser = ({onMerchaniserCreated}) => {

  const [Merchandiser, setMerchandiser] = useState(null);
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
      const fetchMerchandiserById = async () => {
        try {
          const response = await fetch("http://localhost:2000/user/merch/getAllMerch");
          const data = await response.json();
          const foundMerchandiser = data.allList.find((item) => item._id === id);
          setMerchandiser(foundMerchandiser);

          if (foundMerchandiser) {
            fullNameRef.current.value = foundMerchandiser.name;
            roleRef.current.value = foundMerchandiser.role;
            // emailRef.current.value = foundMerchandiser.email;
            passwordRef.current.value = foundMerchandiser.password;
            phoneRef.current.value = foundMerchandiser.phone;
            userNameRef.current.value = foundMerchandiser.userName;
            imageRef.current.value = foundMerchandiser.image;
            confirmPasswordRef.current.value = foundMerchandiser.confirmPassword;
          }
        } catch (error) {
          console.error("Error fetching Merchandiser:", error);
        }
      };

      fetchMerchandiserById();
    }
  }, [id]);

  const handleMerchandiserSubmit = async (e) => {
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
      ? `http://localhost:2000/user/merch/update/${id}`
      : "http://localhost:2000/user/merch/register";

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
        if (onMerchaniserCreated) {
          onMerchaniserCreated(data);
        }
        navigate("/merchandiser");
      } else {
        console.error("Error saving Merchandiser:", res.statusText);
      }
    } catch (error) {
      console.error("Error saving Merchandiser:", error);
    }
  };

  return (
    <div>
        
         {/* <div className="card border-primary col-11 " style={{marginLeft:"50px"}}>
  <div  className="card-header">  
  <h5 className="card-title">ADD MERCHANDISER</h5>
  <div style={{marginLeft:"600px"}} class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary"><Link to="/merchandiser">Merchandiser list</Link></button>
  <button type="button" class="btn btn-outline-primary">Add Merchandiser</button>
 
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
   
      <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
        <option selected>Role</option>
        <option value="1">Admin</option>
        <option value="2">Merchandiser</option>
        <option value="3">Manager</option>
      </select>
    
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
  
    <input type="file" />
    </div>
       
    </div>
    
      </div>
      <div style={{padding:"10px" , textAlign:"center"}}>
<button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-primary btn-lg">Save</button>
<button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-outline-secondary btn-lg">Cancel</button>
</div>
</div> */}


    <div className="card border-primary col-11 " style={{ marginLeft: "50px" }}>
        <div className="card-header">
          <h5 className="card-title">{id ? "EDIT MERCHANDISER" : "CREATE NEW MERCHANDISER"}</h5>
          <div
            style={{ marginLeft: "600px" }}
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <Link to={"/merchandiser"}>
              <button type="button" className="btn btn-outline-primary">
                Merchandiser list
              </button>
            </Link>
            <Link to={"/addMerch"}>
              <button type="button" className="btn btn-outline-primary">
                Add New Merchandiser
              </button>
            </Link>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleMerchandiserSubmit}>
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
                    <option value="Merchandiser">admin</option>
                    <option value="Merchandiser">Merchandiser</option>
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
                onClick={() => navigate("/merchandiser")}
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

export default AddMerchandiser
