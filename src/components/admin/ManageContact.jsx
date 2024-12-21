import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import { useNavigate } from "react-router-dom";
import AdminFooter from "./AdminFooter";

export default function ManageContacts() {
  // distracuring data
  const [data, setData] = useState([]);
  const [flash, setFlash] = useState(false);
  const navigate = useNavigate();

  // fetch all contact us data
  useEffect(() => {
    // axios.get
    axios.get(`http://localhost:3000/contact-us`).then((response) => {
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
            <div className="col-md-3 admin-sidebar p-5">
              <AdminSidebar />
            </div>
            <div className="col-md-9 admin-dashboard">
              <div className="container p-5">
                <div className="row">
                  <h3 className="ms-4">
                    Manage Contacts <span className="bi bi-calendar" />
                  </h3>
                  <hr className="border border-2 border-primary ms-5 w-50" />
                  <div className="col-md-12 ms-4 bg-white shadow p-4 mt-4">
                    <table className="table table-responsive">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phonr</th>
                          <th>Subject</th>
                          <th>Message</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data &&
                          data.map((item) => {
                            return (
                              <>
                                <tr>
                                  <td>{item.name}</td>
                                  <td>{item.email}</td>
                                  <td>{item.phone}</td>
                                  <td>{item.subject}</td>
                                  <td>{item.message}</td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-sm btn-warning text-white">
                                      <span className="bi bi-whatsapp"></span>
                                    </button>{" "}
                                    |
                                    <button
                                      type="button"
                                      onClick={() =>
                                        navigate(
                                          `/admin-login/delete-contacts/${item.id}`
                                        )
                                      }
                                      className="btn btn-sm text-white btn-danger bg-danger">
                                      <span className="bi bi-trash"></span>
                                    </button>{" "}
                                    |
                                    <button
                                      type="button"
                                      onClick={() =>
                                        navigate(
                                          `/admin-login/edit-contact/${item.id}`
                                        )
                                      }
                                      className="btn btn-sm text-white btn-primary bg-primary">
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
