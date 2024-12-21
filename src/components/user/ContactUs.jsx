import React, { useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import Login from "./Login";
const ContactUs = () => {
  // create a destructured for data
  const [data, setData] = useState("");

  // stored all user input data in variable
  const name = useRef("");
  const email = useRef("");
  const phone = useRef("");
  const subject = useRef("");
  const message = useRef("");
  const navigate = useNavigate();

  // create a eventHandeler function for add data
  const addFormData = (e) => {
    e.preventDefault();

    var insert = {
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value,
      subject: subject.current.value,
      message: message.current.value,
    };
    // call api here via axios.post()
    axios.post(`http://localhost:3000/contact-us`, insert).then(() => {
      // pass inserted data message via Swa librarries
      Swal.fire({
        title: "Good job!",
        text: "Your added data successfully!",
        icon: "success",
      });
      e.target.reset();
    });
  };
  return (
    <>
      <>
        {/* contact us start here */}
        <Header />
        <Navbar />
        <div className="container p-5 mt-5">
          <h1 className="p-3">
            Get in Touch with Us Contact us <span className="bi bi-geo-alt" />
          </h1>
          <hr className="border border-1 border-danger" />
          <div className="row">
            <div className="col-md-6 login-sidebar m-0 p-0">
              <div className="text-overlay">
                <ul>
                  <li className="p-5">
                    <h2 className="text-white">
                      Get in touch in Google Map
                      <hr className="border border-1 border-white" />
                    </h2>
                  </li>
                  <li className="p-0 ms-0">
                    <p className="text-white">
                      101, Aditya Complex, Jalaram 2 Street Number 2, above Sbi
                      Bank, Near Indira Circle, Jala Ram Nagar, Rajkot, Gujarat
                      360005
                    </p>
                  </li>
                  <li className="p-0 ms-0">
                    <p className="text-white">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d118133.77956216878!2d70.69255357226606!3d22.290085304537417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3959ca248c77c099%3A0xdf5ac10af64ac8ee!2s101%2C%20Aditya%20Complex%2C%20Jalaram%202%20Street%20Number%202%2C%20above%20Sbi%20Bank%2C%20Near%20Indira%20Circle%2C%20Jala%20Ram%20Nagar%2C%20Rajkot%2C%20Gujarat%20360005!3m2!1d22.2901061!2d70.7749552!5e0!3m2!1sen!2sin!4v1705905602853!5m2!1sen!2sin"
                        width="80%"
                        height={250}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 login-frm p-5">
              <form method="post" onSubmit={addFormData}>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    ref={name}
                    name="name"
                    placeholder="Name *"
                    required=""
                    className="form-control"
                  />
                </div>

                <div className="form-group mt-3">
                  <input
                    type="text"
                    ref={email}
                    name="email"
                    placeholder="Email *"
                    required=""
                    className="form-control"
                  />
                </div>

                <div className="form-group mt-3">
                  <input
                    type="text"
                    ref={phone}
                    name="phone"
                    placeholder="Phone *"
                    required=""
                    className="form-control"
                  />
                </div>

                <div className="form-group mt-3">
                  <input
                    type="text"
                    ref={subject}
                    name="subject"
                    placeholder="Subject *"
                    required=""
                    className="form-control"
                  />
                </div>

                <div className="form-group mt-3">
                  <textarea
                    name="message"
                    ref={message}
                    placeholder="Message *"
                    required=""
                    className="form-control"
                    defaultValue={""}
                  />
                </div>

                <div className="form-group mt-3">
                  <input
                    type="submit"
                    name="send"
                    value="Send"
                    className="btn btn-sm btn-dark text-white"
                  />

                  {/* <input type="reset" name="reset" defaultValue="Reset" className="btn btn-sm ms-2 btn-danger text-white"/> */}
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
        {/* <Login /> */}
      </>
    </>
  );
};

export default ContactUs;
