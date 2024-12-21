import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="modal fade" role="dialog" id="lg">
        <div className="modal-dialog">
          <div className="modal-content">
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
                      type="submit"
                      name="login"
                      defaultValue="SignIn"
                      className="btn btn-sm btn-dark text-white"
                    />
                    <b className="ms-3">
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#frg"
                        data-bs-dismiss="modal">
                        Forget Password ?
                      </Link>
                    </b>
                  </div>
                  <div className="form-group mt-3">
                    <b className="ms-0">
                      Don't have an Account ?
                      <Link to="/create-account">Create Account</Link>
                    </b>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
