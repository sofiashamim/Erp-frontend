import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../ManageInventory/createAccess.scss";

const AddNewAdmin = ({ onAdminCreated }) => {
  const [admin, setAdmin] = useState(null);
  const fullNameRef = useRef();
  const roleRef = useRef();
  const passwordRef = useRef();
  const phoneRef = useRef();
  const adminNameRef = useRef();
  const confirmPasswordRef = useRef();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchAdminById = async () => {
        try {
          const response = await fetch("http://localhost:2000/user/admin/getAllAdmin");
          const data = await response.json();
          const foundAdmin = data.allList.find((item) => item._id === id);
          setAdmin(foundAdmin);

          if (foundAdmin) {
            fullNameRef.current.value = foundAdmin.name;
            roleRef.current.value = foundAdmin.role;
            passwordRef.current.value = foundAdmin.password;
            phoneRef.current.value = foundAdmin.phone;
            adminNameRef.current.value = foundAdmin.userName;
            confirmPasswordRef.current.value = foundAdmin.confirmPassword;
          }
        } catch (error) {
          console.error("Error fetching admin:", error);
        }
      };

      fetchAdminById();
    }
  }, [id]);

  const handleAdminSubmit = async (e) => {
    e.preventDefault();

    const obj = {
      name: fullNameRef.current.value,
      role: roleRef.current.value,
      password: passwordRef.current.value,
      phone: phoneRef.current.value,
      username: adminNameRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
    };

    const url = id
      ? `http://localhost:2000/user/admin/update/${id}`
      : "http://localhost:2000/user/admin/register";

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
        if (onAdminCreated) {
          onAdminCreated(data);
        }
        navigate("/admin");
      } else {
        console.error("Error saving admin:", res.statusText);
      }
    } catch (error) {
      console.error("Error saving admin:", error);
    }
  };

  return (
    <div>
      <div className="card border-primary col-11 " style={{ marginLeft: "50px" }}>
        <div className="card-header">
          <h5 className="card-title">{id ? "EDIT ADMIN" : "CREATE NEW ADMIN"}</h5>
          <div
            style={{ marginLeft: "600px" }}
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <Link to={"/admin"}>
              <button type="button" className="btn btn-outline-primary">
                Admin list
              </button>
            </Link>
            <Link to={"/newAdmin"}>
              <button type="button" className="btn btn-outline-primary">
                Add New Admin
              </button>
            </Link>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleAdminSubmit}>
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
                    <option value="Admin">Admin</option>
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
                  <label htmlFor="first">Admin Name</label>
                  <input
                    ref={adminNameRef}
                    style={{ width: "300px" }}
                    placeholder="Admin Name"
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
                <input type="file" />
              </div>
            </div>
            <div style={{ padding: "10px", textAlign: "center" }}>
              <button
                style={{ width: "150px", marginRight: "5px" }}
                type="button"
                className="btn btn-outline-secondary btn-lg"
                onClick={() => navigate("/admin")}
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
  );
};

export default AddNewAdmin;
