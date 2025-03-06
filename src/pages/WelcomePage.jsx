import React from "react";
import logo from "../assets/assets/img/upbg.png";
import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/assets/logo.png";

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="login-30 tab-box" style={{ overflow: "hidden" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 col-md-12 form-section">
            <div className="login-inner-form">
              <div className="details">
                <h1 className="mb-5">Welcome Back</h1>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      id="first_field"
                      placeholder="Email Email"
                      aria-label="Email Address"
                    />
                  </div>
                  <div className="form-group clearfix">
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      autoComplete="off"
                      id="second_field"
                      placeholder="Password"
                      aria-label="Password"
                    />
                  </div>
                  <div className="checkbox form-group clearfix">
                    <div className="float-start">
                      <label className="form-check-label" htmlFor="rememberme">
                        By continuing, you are acknowledging that you have read,
                        understood and agreed to Mansha's{" "}
                        <a href="#">Terms and Conditions</a> and
                        <a href="#">Privacy Policy</a>
                      </label>
                    </div>
                  </div>
                  <div
                    className="form-group mb-3"
                    style={{ textAlign: "right" }}
                  >
                    <button type="submit" className="btn btn-primary w-25">
                      Enter
                    </button>
                  </div>
                  <div className="text-center">
                    <label className="form-check-label" htmlFor="rememberme">
                      If you don't have an account, Please{" "}
                      <Link to="/">Sign Up Now</Link>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 bg-img position-relative">
            <div id="bg">
              <h5 className="text-white">Sign In</h5>
            </div>
            <img src={logo} style={{ position: "absolute", right: "20%" }} />
            <div className="text-center">
              <img
                // src="assets/logo.png"
                src={bg}
                alt="logo"
                style={{ width: 250, marginBottom: 50 }}
              />
              <h4 className="text-white mt-2 mb-3">Welcome to Schooleo </h4>
              <p className="text-white">
                Login to get started with Schooleo
                <br />
                If not yet registered click on sign up
                <br />
                to get started
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
