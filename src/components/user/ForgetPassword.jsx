import React from "react";
const ForgetPassword = () => {
  return (
    <>
      <div className="modal fade" role="dialog" id="frg">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="row">
              <div className="col-md-6 login-sidebar m-0 p-0">
                <div className="text-overlay">
                  <ul>
                    <li className="p-5">
                      <h2 className="text-white">
                        Forget Password
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
                      type="submit"
                      name="frg"
                      defaultValue="Submit"
                      className="btn btn-sm btn-dark text-white"
                    />
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

export default ForgetPassword;
