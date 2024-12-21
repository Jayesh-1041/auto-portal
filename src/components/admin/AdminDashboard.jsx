import React from "react";

export default function AdminDashboard() {
  return (
    <div className="container p-5">
      <div className="row">
        <h3 className="ms-4">Welcome to Admin Dashboard Auto Portal</h3>
        <div className="col-md-3 ms-5 bg-danger p-4 mt-4">
          <h4 className="text-white">Total Customer</h4>
          <h2 className="text-center">
            <span className="badge badge-lg bg-white text-dark">10</span>
          </h2>
        </div>
        <div className="col-md-3 ms-5 bg-primary p-4 mt-4">
          <h4 className="text-white">Total Contacts</h4>
          <h2 className="text-center">
            <span className="badge badge-lg bg-white text-dark">10</span>
          </h2>
        </div>
        <div className="col-md-3 ms-5 bg-success p-4 mt-4">
          <h4 className="text-white">Total Feedback</h4>
          <h2 className="text-center">
            <span className="badge badge-lg bg-white text-dark">10</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
