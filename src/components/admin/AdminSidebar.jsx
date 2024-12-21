import React from "react";

export default function AdminSidebar() {
  return (
    <>
      <ul className="sidebar-link">
        <li>
          <a href="/admin-login/manage-contacts">
            <span className="bi bi-person" /> Manage Customers
          </a>
        </li>
        <li className="dropdown">
          <a
            className="dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            aria-expanded="false">
            <span className="bi bi-calendar" />
            Add Car Category
          </a>
          <ul
            className="dropdown-menu bg-white text-dark"
            style={{ maxWidth: "250px !important" }}>
            <li>
              <a href="/admin-login/addcar-category" className="text-dark">
                AddCategory <span className="bi bi-calendar" />
              </a>
            </li>
            <li>
              <a href="/admin-login/managecar-category" className="text-dark">
                ManageCategory <span className="bi bi-calendar" />
              </a>
            </li>
          </ul>
        </li>

        <li className="dropdown">
          <a className="dropdown-toggle" data-bs-toggle="dropdown" href="#">
            <span className="bi bi-calendar" />
            Add Cars
          </a>
          <ul
            className="dropdown-menu bg-white text-dark p-2"
            style={{ maxWidth: "250px !important" }}>
            <li>
              <a href="/admin-login/add-car" className="text-dark">
                AddCar <span className="bi bi-calendar" />
              </a>
            </li>
            <li>
              <a href="/admin-login/manage-car" className="text-dark">
                ManageCar <span className="bi bi-calendar" />
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#">
            <span className="bi bi-calendar" />
            Manage Orders
          </a>
        </li>
        <li>
          <a href="#">
            <span className="bi bi-book" />
            Add FAQ
          </a>
        </li>
        <li>
          <a href="/admin-login/manage-contacts">
            <span className="bi bi-book" />
            Manage Contacts
          </a>
        </li>
        <li>
          <a href="#">
            <span className="bi bi-calendar" />
            Manage Feedback
          </a>
        </li>
      </ul>
    </>
  );
}
