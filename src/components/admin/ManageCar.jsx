import React, { useState, useEffect } from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import AdminFooter from "./AdminFooter";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ManageCar() {
  const [data, setData] = useState("");
  const [flash, setFlash] = useState(false);
  const navigate = useNavigate();

  // create a useEffect hooks for manage category
  useEffect(() => {
    axios.get(`http://localhost:3000/addcars`).then((response) => {
      setData(response.data);
      setFlash(true);
    });
  }, [data]);

  return (
    <>
      <body className="dashboard">
        <AdminHeader />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 admin-sidebar">
              <AdminSidebar />
            </div>

            <div className="col-md-9 admin-dashboard">
              <div className="container p-5">
                <div className="row">
                  <h3 className="ms-4">
                    Manage Car Category <span className="bi bi-calender" />
                  </h3>
                  <hr className="border border-2 border-primary ms-5 w-50" />
                  <div className="col-md-12 ms-4 bg-white shadow p-2 mt-4">
                    <table className="table table-responsive">
                      <thead>
                        <tr style={{ textAlign: "start" }}>
                          <th>id</th>
                          <th>Car Name</th>
                          <th>Car Image</th>
                          <th>Old Price</th>
                          <th>Offer Price</th>
                          <th>Description</th>
                          <th>Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data &&
                          data.map((item) => {
                            return (
                              <>
                                <tr style={{ textAlign: "center" }}>
                                  <td>{item.id}</td>
                                  <td>{item.carname}</td>
                                  <td>
                                    <img
                                      src={item.carimage}
                                      className="img-fluid"
                                      style={{ width: "75px", height: "75px" }}
                                    />
                                  </td>
                                  <td>{item.oldprice}</td>
                                  <td>{item.offerprice}</td>
                                  <td>{item.description}</td>
                                  <td>{item.addeddate}</td>
                                  <td>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        navigate(
                                          `/admin-login/delete-car/${item.id}`
                                        )
                                      }
                                      className="btn btn-sm btn-danger text-white bg-danger">
                                      <span className="bi bi-trash"></span>
                                    </button>{" "}
                                    |
                                    <button
                                      type="button"
                                      onClick={() =>
                                        navigate(
                                          `/admin-login/edit-car/${item.id}`
                                        )
                                      }
                                      className="btn btn-sm btn-primary text-white">
                                      <span className="bi bi-pencil"></span>
                                    </button>
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                      </tbody>
                    </table>
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
