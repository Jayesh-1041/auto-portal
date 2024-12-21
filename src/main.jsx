import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "animate.css";
import "./assets/css/style.css";
import "./assets/AdminCSS/style.css";

// User panel components import here
import Layout from "./Layout";
import CarListing from "./components/user/CarListing";
import ContactUs from "./components/user/ContactUs";
import Register from "./components/user/Register";
import AboutUs from "./components/user/About";

// User Admin panel components import here
import AdminLogin from "./components/admin/AdminLogin";
import AdminLayout from "./AdminLayout";
import AddCarCategory from "./components/admin/AddCarCategory";
import ManageCarCategory from "./components/admin/ManageCarCategory";
import DeleteCarCategory from "./components/admin/DeleteCarCategory";
import UpdateCarCategory from "./components/admin/UpdateCarCategory";
import AddCar from "./components/admin/AddCar";
import ManageCar from "./components/admin/ManageCar";
import DeleteCar from "./components/admin/DeleteCar";
import UpdateCar from "./components/admin/UpdateCar";
import ManageContacts from "./components/admin/ManageContact";
import DeleteContact from "./components/admin/DeleteContact";
import UpdateContact from "./components/admin/UpdateContact";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* user panel react routing here */}
        <Route path="*" element={<Layout />} />
        <Route path="/CarListing" element={<CarListing />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="create-account" element={<Register />} />
        <Route path="/About" element={<AboutUs />} />

        {/* Admin panel react routing here */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-login/dashboard" element={<AdminLayout />} />
        <Route
          path="/admin-login/addcar-category"
          element={<AddCarCategory />}
        />
        <Route
          path="/admin-login/managecar-category"
          element={<ManageCarCategory />}
        />
        <Route
          path="/admin-login/delete-carCategory/:id"
          element={<DeleteCarCategory />}
        />
        <Route
          path="/admin-login/edit-carCategory/:id"
          element={<UpdateCarCategory />}
        />
        <Route path="/admin-login/add-car" element={<AddCar />} />
        <Route path="/admin-login/manage-car" element={<ManageCar />} />
        <Route path="/admin-login/delete-car/:id" element={<DeleteCar />} />
        <Route path="/admin-login/edit-car/:id" element={<UpdateCar />} />
        <Route
          path="/admin-login/manage-contacts"
          element={<ManageContacts />}
        />
        <Route
          path="/admin-login/delete-contacts/:id"
          element={<DeleteContact />}
        />
        <Route
          path="/admin-login/edit-contact/:id"
          element={<UpdateContact />}
        />
      </Routes>
    </Router>
  </StrictMode>
);
