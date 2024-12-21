import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import AdminFooter from "./AdminFooter";
import { useNavigate } from "react-router-dom";

export default function ManageCarCategory() {
  const [data, setData] = useState("");
  const [flash, setFlash] = useState(false);
  const navigate = useNavigate();

  // create a useEffect() hooks for manage category
  useEffect(() => {
    axios.get(`http://localhost:3000/addcarcategores`).then((response) => {
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
            <div className="col-md-3 admin-sidebar p-3">
              <AdminSidebar />
            </div>

            <div className="col-md-9 admin-dashboard">
              <div className="container p-5">
                <div className="row">
                  <h3 className="ms-4">
                    Manage Car Category <span className="bi bi-calender" />
                  </h3>
                  <hr className="border border-2 border-primary ms-5 w-50" />
                  <div className="col-md-12 ms-4 bg-white shadow p-4 mt-4">
                    <table className="table table-responsive">
                      <thead>
                        <tr>
                          <th>Categoryname</th>
                          <th>Car Image</th>
                          <th>Added Date</th>
                          <th>Description</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data &&
                          data.map((item) => {
                            return (
                              <>
                                <tr>
                                  <td>{item.categoryname}</td>
                                  <td>
                                    <img
                                      src={item.image}
                                      className="img-fluid"
                                      style={{ width: "75px", height: "75px" }}
                                    />
                                  </td>
                                  <td>{item.addeddate}</td>
                                  <td>{item.description}</td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-sm btn-primary text-white">
                                      <span className="bi bi-whatsapp"></span>
                                    </button>{" "}
                                    |
                                    <button
                                      type="button"
                                      onClick={() =>
                                        navigate(
                                          `/admin-login/delete-carCategory/${item.id}`
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
                                          `/admin-login/edit-carCategory/${item.id}`
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
