import React from "react";

export default function AdminHeader() {
  return (
    <>
      {/* header */}
      <div className="container-fluid p-3 admin-header shadow">
        <div className="row">
          <div className="col-md-7">
            <h3 className="text-white">SRMS Admin</h3>
          </div>
          <div className="col-md-5 mt-2" style={{ textAlign: "center" }}>
            <h6 className="fs-5">
              <span className="bi bi-person text-white" />
              welcome admin &nbsp;&nbsp;&nbsp;{" "}
              <span className="bi bi-calender" />
              &nbsp; Tuesday June 2024 &nbsp;&nbsp;&nbsp;{" "}
              <span className="bi bi-power text-danger" /> &nbsp; Logout
            </h6>
          </div>
        </div>
      </div>
      <div className="admin-botton-header shadow p-3">
        <div className="row">
          <div className="col-md-4">
            <h6>
              <a href="#">
                <span className="ms-5 bi bi-speedometer" />
                &nbsp; Dashboard
              </a>
            </h6>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              placeholder="search here anything........."
              className="from-control ms-0 w-75 shadow"
              style={{ borderRadius: "10px", padding: "5px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
