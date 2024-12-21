import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* Header Start Here */}
      <div className="main_contain">
        <div className="topheader">
          <div className="logo">
            <div className="socilflex">
              <div className="topphone">
                <div className="phonricon">
                  <i className="bi bi-telephone"></i>
                </div>
                <p className="number">+55 66 77 88 99</p>
              </div>
              <div className="topemail">
                <div className="emailicon">
                  <i className="bi bi-envelope" />
                </div>
                <p className="emailpara">info@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="serch-box ">
            <span className="" style={{ color: "whitesmoke" }}>
              Welcome to Auto Portal <strong>Login</strong> or{" "}
              <strong>Register</strong>
            </span>
          </div>
          <div className="social-media fs-4" style={{ color: "violet" }}>
            <span className="bi bi-facebook" />
            <span className="bi bi-inatagram ms-2" />
            <span className="bi bi-twitter" />
            <span className="bi bi-whatsapp ms-2" />
            <span className="bi bi-linkedin ms-2" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
