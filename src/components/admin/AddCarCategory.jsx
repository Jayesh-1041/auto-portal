import React, { useState, useRef, useEffect } from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import AdminFooter from "./AdminFooter";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddCarCategory() {
  const [data, setData] = useState("");
  const navigate = useNavigate();

  // fetch a food category to display in select
  useEffect(() => {
    axios.get(`http://localhost:3000/addcarcategores`).then((response) => {
      setData(response.data);
    });
  });

  const categoryname = useRef("");
  const image = useRef("");
  const addeddate = useRef("");
  const description = useRef("");

  // create a addEvent Handeler functions
  const addCategoryData = (e) => {
    e.preventDefault();

    var ins = {
      categoryname: categoryname.current.value,
      image: image.current.value,
      addeddate: addeddate.current.value,
      description: description.current.value,
    };

    // call api via axios.post()
    axios.post(`http://localhost:3000/addcarcategores`, ins).then(() => {
      // pass a message
      Swal.fire({
        title: "Good job!",
        text: "your added data success!",
        icon: "success",
      });

      navigate("/admin-login/addcar-category");
      e.target.reset();
    });
  };
  return (
    <>
      <body className="dashboard">
        <AdminHeader />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 admin-sidebar p-5">
              <AdminSidebar />
            </div>
            <div className="col-md-9 admin-dashboard">
              <div className="container p-5">
                <div className="row">
                  <h3 className="ms-4">
                    Add Car Category <span className="bi bi-calendar" />
                  </h3>
                  <hr className="border border-2 border-primary ms-5 w-50" />
                  <div className="col-md-12 ms-4 bg-white shadow p-4 mt-4">
                    <form onSubmit={addCategoryData}>
                      <div className="form-group mt-3">
                        <input
                          type="text"
                          ref={categoryname}
                          placeholder="Enter Car Category Name"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group mt-3">
                        <input
                          type="text"
                          ref={image}
                          placeholder="Car image URL"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group mt-3">
                        <input
                          type="date"
                          ref={addeddate}
                          placeholder="Add Date"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group mt-3">
                        <textarea
                          ref={description}
                          placeholder="Enter Description"
                          className="form-control"></textarea>
                      </div>

                      <div className="form-group mt-3">
                        <input
                          type="submit"
                          name="addcategory"
                          value="AddCategory"
                          className="btn btn-md btn-primary bg-primary text-white"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AdminFooter />
      </body>
    </>
  );
}
