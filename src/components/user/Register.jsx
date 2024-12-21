import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Login from "./Login";
const Register = () => {
  return (
    <>
      <>
        {/* Register page start here */}
        <Header />
        <Navbar />
        <div className="container p-5 mt-5">
          <h1 className="p-3">Create Your Account </h1>
          <hr className="border border-1 border-danger" />
          <div className="row">
            <div className="col-md-6 login-sidebar m-0 p-0">
              <div className="text-overlay">
                <ul>
                  <li className="p-5">
                    <h2 className="text-white">
                      Why Join with us
                      <hr className="border border-1 border-white" />
                    </h2>
                  </li>
                  <li className="p-0 ms-5">
                    <p className="text-white">Best services in Rajkot Area</p>
                  </li>
                  <li className="p-0 ms-5">
                    <p className="text-white">24x7 Life support</p>
                  </li>
                  <li className="p-0 ms-5">
                    <p className="text-white">Return Policy</p>
                  </li>
                  <li className="p-0 ms-5">
                    <p className="text-white">Terms and Conditions</p>
                  </li>
                  <li className="p-0 ms-5">
                    <p className="text-white">24x7 Customer care support</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 login-frm p-5">
              <form method="post">
                <div className="form-group mt-3">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email *"
                    required=""
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password *"
                    required=""
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="password"
                    name="cpassword"
                    placeholder="Confirmed Password *"
                    required=""
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone *"
                    required=""
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-3">
                  Male <input type="radio" name="gender" className="w-0 h-0" />
                  Female{" "}
                  <input type="radio" name="gender" className="w-0 h-0" />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    name="address"
                    placeholder="Address *"
                    required=""
                    className="form-control"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="submit"
                    name="reg"
                    defaultValue="SignUp"
                    className="btn btn-sm btn-dark text-white"
                  />
                  &nbsp;
                  <input
                    type="reset"
                    name="reset"
                    defaultValue="Reset"
                    className="btn btn-sm btn-danger text-white"
                  />
                </div>
                <div className="form-group mt-3">
                  <b className="ms-0">
                    Already have an Account ?
                    <a href="#" data-bs-toggle="modal" data-bs-target="#lg">
                      SignIn
                    </a>
                  </b>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Footer />
        <Login />
      </>
    </>
  );
};

export default Register;
