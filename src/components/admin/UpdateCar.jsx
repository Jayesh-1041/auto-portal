import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";

export default function UpdateCar() {
  // Destructuring data
  const [data, setData] = useState("");
  const [carCat, setCarCat] = useState("");
  const [flash, setFlash] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  // store data in variable
  const carname = useRef("");
  const carimage = useRef("");
  const oldprice = useRef("");
  const offerprice = useRef("");
  const description = useRef("");
  const addeddate = useRef("");

  // create a function for edit data
  useEffect(() => {
    // call api via axios
    axios.get(`http://localhost:3000/addcars/${id}`).then((response) => {
      setData(response.data);

      // for edit all data
      (carname.current.value = response.data.carname),
        (carimage.current.value = response.data.carimage),
        (oldprice.current.value = response.data.oldprice),
        (offerprice.current.value = response.data.offerprice),
        (description.current.value = response.data.description),
        (addeddate.current.value = response.data.addeddate);
    });
  }, []);

  // create a addEvent hendalar function for upadate food
  const addCardata = (e) => {
    e.preventDefault();

    var upd = {
      carname: carname.current.value,
      carimage: carimage.current.value,
      oldprice: oldprice.current.value,
      offerprice: offerprice.current.value,
      description: description.current.value,
      addeddate: addeddate.current.value,
    };

    // call the api for update data
    axios.put(`http://localhost:3000/addcars/${id}`, upd).then(() => {
      // pass a message
      Swal.fire({
        title: "Good job!",
        text: "Your data update successfully!",
        icon: "success",
      });

      setFlash(true);
      navigate("/admin-login/manage-car");
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
                    Edit Car <span className="bi bi-calendar" />
                  </h3>
                  <hr className="border border-2 border-primary ms-5 w-50" />
                  <div className="col-md-12 ms-4 bg-white shadow p-4 mt-4">
                    <form>
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
                          placeholder="Car image URL"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group mt-3">
                        <input
                          type="text"
                          ref={oldprice}
                          placeholder="Enter Old Price"
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
                          placeholder="Descriptions"
                          className="form-control"></textarea>
                      </div>

                      <div className="form-group mt-3">
                        <input
                          type="date"
                          ref={addeddate}
                          placeholder="Added Date"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group mt-3">
                        <button
                          type="button"
                          onClick={addCardata}
                          className="btn btn-sm btn-dark bg-dark text-white">
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
    </>
  );
}
