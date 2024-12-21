import React, { useState, useEffect, useRef } from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import AdminFooter from "./AdminFooter";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateCarCategory() {
  // destrucrimg for flash & update data
  const [data, setData] = useState("");
  const [flash, setFlash] = useState(false);

  // store all  useRef("") in variable
  const categoryname = useRef("");
  const image = useRef("");
  const addeddate = useRef("");
  const description = useRef("");
  const navigate = useNavigate();
  const { id } = useParams();

  // create a function for edit data
  useEffect(() => {
    // call api via axios
    axios
      .get(`http://localhost:3000/addcarcategores/${id}`)
      .then((response) => {
        setData(response.data);

        // for edit all data
        categoryname.current.value = response.data.categoryname;
        image.current.value = response.data.image;
        addeddate.current.value = response.data.addeddate;
        description.current.value = response.data.description;
      });
  }, []);

  // create a addEvent hendler function
  const updData = (e) => {
    e.preventDefault();

    var upd = {
      categoryname: categoryname.current.value,
      image: image.current.value,
      addeddate: addeddate.current.value,
      description: description.current.value,
    };

    // call the api for update data
    axios.put(`http://localhost:3000/addcarcategores/${id}`, upd).then(() => {
      setFlash(true);
      navigate("/admin-login/managecar-category");

      // pass message
      Swal.fire({
        title: "Good job!",
        text: "Your Update data successfully!",
        icon: "success",
      });
    });
  };

  return (
    <div>
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
                    Edit Car Category <span className="bi bi-calendar" />
                  </h3>
                  <hr className="border border-2 border-primary ms-5 w-50" />
                  <div className="col-md-12 ms-4 bg-white shadow p-4 mt-4">
                    <form>
                      <div className="form-group mt-3">
                        <input
                          type="text"
                          ref={categoryname}
                          placeholder="Enter Category Name"
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
                        <button
                          type="button"
                          onClick={updData}
                          className="btn btn-sm btn-primary bg-primary text-white">
                          Update Employee
                        </button>
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
    </div>
  );
}
