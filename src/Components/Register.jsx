import Lottie from "lottie-react";
import React, { use, useState } from "react";
import RegisterLottie from "../assets/Lotties/Register.json";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";

const Register = () => {

  const [error, setError] = useState("");

  const { createUser, updateUser, setUser } = use(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, photo, email, password });

    // create user
   createUser(email, password)
         .then((result) => {
           const user = result.user;
           // console.log(user);
           Swal.fire({
             position: "top-end",
             icon: "success",
             title: "Created account successfully!",
             showConfirmButton: false,
             timer: 1500,
           });
           // setUser(user);
           updateUser({ displayName: name, photoURL: photo })
             .then(() => {
               setUser({ ...user, displayName: name, photoURL: photo });
               navigate("/");
             })
             .catch((error) => {
               setError(error.message);
               setUser(user);
               Swal.fire({
                 position: "top-end",
                 icon: "error",
                 title: `${error.message}`,
                 showConfirmButton: false,
                 timer: 1500,
               });
             });
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

  return (
    <div className="hero min-h-screen">
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
                <label className="label">PhotoURL</label>
                <input
                  type="text"
                  name="photoURL"
                  className="input"
                  placeholder="Enter your Photo URL"
                  required
                />

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
