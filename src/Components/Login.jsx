import Lottie from "lottie-react";
import React, { use, useState } from "react";
import LoginLottie from "../assets/Lotties/Login.json";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");

  const { signInUser, setUser, signInWithGoogle } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });

    // login user
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "SignIn successfull !",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        setError(error.message);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleGoogleLogIn = (e) => {
    e.preventDefault();

    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "LogIn successfull !",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`${location.state ? location.state : "/"}`);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={LoginLottie} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <button
              type="submit"
              onClick={handleGoogleLogIn}
              className="btn btn-outline hover:bg-[#A37854] hover:text-white text-lg mt-8"
            >
              <FaGoogle />
              SignIn with Google
            </button>
            <p className="border border-dashed border-gray-400 my-5"></p>
            <h1 className="text-4xl font-bold text-center">Login now!</h1>
            <form onSubmit={handleLogin}>
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
                {error && <p className="text-red-600 text-xs">{error}</p>}
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn text-white mt-4 bg-[#A37854] hover:bg-[#8a623e]">Login</button>
                <p className="text-center mt-3 font-semibold text-sm">
                  Don't have an account?{" "}
                  <Link
                    to="/auth/register"
                    className="text-[#A37854] cursor-pointer hover:underline hover:font-extrabold"
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
