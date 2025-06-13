import Lottie from "lottie-react";
import React from "react";
import RegisterLottie from "../assets/Lotties/Register.json";
import { Link } from "react-router";

const Register = () => {


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.files[0];
        const email = form.email.value;
        const password = form.password.value;
        console.log({name, photo, email, password});

    }

  return (
    <div className="hero bg-[#E6D3B3] min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <div className="text-center lg:text-left">
          <Lottie animationData={RegisterLottie} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-4xl font-bold text-center">Register now!</h1>
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                {/* Name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Enter your Name"
                  required
                />

                {/* Photo */}
                <label className="label">Upload a photo</label>
                <input type="file" name="photo" className="file-input" required />
                <p className="label">Max size 2MB</p>

                {/* Email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Enter your Email"
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
                <button className="btn btn-neutral mt-4">Register</button>

                <p className="text-center mt-3 font-semibold text-sm">
                  Already have an account?{" "}
                  <Link
                    to="/auth/Login"
                    className="text-secondary cursor-pointer hover:underline hover:font-bold"
                  >
                    Login
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

export default Register;
