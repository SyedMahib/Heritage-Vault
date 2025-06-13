import Lottie from "lottie-react";
import React from "react";
import LoginLottie from "../assets/Lotties/Login.json";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="hero bg-[#E6D3B3] min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={LoginLottie} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-4xl font-bold text-center">Login now!</h1>
            <form>
              <fieldset className="fieldset">
                {/* Email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  required
                />
                {/* Password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
                <p className="text-center mt-3 font-semibold text-sm">
                  Don't have an account?{" "}
                  <Link
                    to="/auth/Register"
                    className="text-secondary cursor-pointer hover:underline hover:font-bold"
                  >
                    Register
                  </Link>
                  .
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
