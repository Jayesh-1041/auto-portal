import React from "react";
// import '../../assets/AdminCSS/users.png'

export default function AdminLogin() {
  return (
    <div>
      <>
        {/* <!-- admin login --> */}
        <body className="admin">
          <div className="container mt-5 w-75 mx-auto">
            <div className="row">
              <div className="col-md-6 shadow welcome-admin p-5">
                <p className="text-center fs-1">
                  <span className="bi bi-person-circle text-white">
                    &nbsp;Welcome to Admin
                  </span>
                </p>
                <p className="text-center text-white w-75 mx-auto">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, culpa iure, sapiente vitae minus dignissimos ipsa
                  adipisci repellendus ullam voluptates officia magni veritatis
                  suscipit distinctio. Eius esse enim aspernatur eaque!
                </p>
              </div>
              <div className="col-md-6 admin-login shadow p-5">
                <p className="text-center">
                  {/* <img src={users} className="img-fluid w-25" /> */}
                </p>
                <form>
                  <div className="form-group mt-2">
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mt-2">
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mt-2">
                    <input
                      type="submit"
                      name="login"
                      value="SignIn"
                      defaultValue="Login"
                      className="btn btn-primary btn-sm"
                    />
                    <b className="ms-3">
                      <a href="">Forget Password ?</a>
                    </b>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </body>
      </>
    </div>
  );
}
