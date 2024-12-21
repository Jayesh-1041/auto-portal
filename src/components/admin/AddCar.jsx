import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import AdminFooter from "./AdminFooter";

export default function AddCar() {
  const [data, setData] = useState("");
  const navigate = useNavigate();

  // fetch a food category to display in select
  useEffect(() => {
    axios.get(`http://localhost:3000/addcarcategores`).then((response) => {
      setData(response.data);
    });
  }, []);

  // store data in variable
  const id = useRef("");
  const carname = useRef("");
  const carimage = useRef("");
  const oldprice = useRef("");
  const offerprice = useRef("");
  const description = useRef("");
  const addeddate = useRef("");

  // Create a addEvent hendeler function
  const addCar = (e) => {
    e.preventDefault();

    var inc = {
      id: id.current.value,
      carname: carname.current.value,
      carimage: carimage.current.value,
      oldprice: oldprice.current.value,
      offerprice: offerprice.current.value,
      description: description.current.value,
      addeddate: addeddate.current.value,
    };

    // call api via axios.post()
    axios.post(`http://localhost:3000/addcars`, inc).then(() => {
      // pass a message
      Swal.fire({
        title: "Good job!",
        text: "Your added food data!",
        icon: "success",
      });

      e.target.reset();
      navigate("/admin-login/add-car");
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
                    Add Car <span className="bi bi-calendar" />
                  </h3>
                  <hr className="border border-2 border-primary ms-5 w-50" />
                  <div className="col-md-12 ms-4 bg-white shadow p-4 mt-4">
                    <form onSubmit={addCar}>
                      <div className="form-group">
                        <div className="form-group mt-3">
                          <input
                            type="text"
                            ref={id}
                            placeholder="Enter id"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="form-group mt-3">
                        <input
                          type="text"
                          ref={carname}
                          placeholder="Enter Car Name"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group mt-3">
                        <input
                          type="text"
                          ref={carimage}
                          placeholder="Car Image URL"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group mt-3">
                        <input
                          type="text"
                          ref={oldprice}
                          placeholder="Car Old price"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group mt-3">
                        <input
                          type="text"
                          ref={offerprice}
                          placeholder="Enter Offer Price"
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
                          type="date"
                          ref={addeddate}
                          placeholder="Add Date"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group mt-3">
                        <input
                          type="submit"
                          name="addCar"
                          value="AddCar"
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
