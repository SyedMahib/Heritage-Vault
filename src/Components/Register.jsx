import Lottie from "lottie-react";
import React, { use, useState } from "react";
import RegisterLottie from "../assets/Lotties/Register.json";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const [error, setError] = useState("");

  const { createUser, updateUser, setUser, signInWithGoogle } =
    use(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, photo, email, password });

    const passwordRegExp = /(?=.*[a-z])(?=.*[A-Z]).{6,}/;

    if (passwordRegExp.test(password) === false) {
      setError(
        "password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
      );
      return;
    } else {
      setError("");
    }

    setError("");

    // create user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Created account successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
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

  const handleGoogleRegister = (e) => {
    e.preventDefault();

    signInWithGoogle()
      .then((res) => {
        const user = res.user;
        setUser(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "SignUp successfull!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
        setError("");
      })
      .catch((err) => {
        setError(err.message);
        Swal.fire({
          position: "top-end",
          icon: "success",
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
            <button
              type="submit"
              onClick={handleGoogleRegister}
              className="btn btn-outline hover:bg-[#A37854] hover:text-white text-lg mt-8"
            >
              <FaGoogle />
              Register with Google
            </button>
            <p className="border border-dashed border-gray-400 my-5"></p>
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
                {error && <p className="text-red-600 text-xs">{error}</p>}
                <button className="btn text-white mt-4 bg-[#A37854] hover:bg-[#8a623e]">Register</button>

                <p className="text-center mt-3 font-semibold text-sm">
                  Already have an account?{" "}
                  <Link
                    to="/auth/login"
                    className="text-[#A37854] cursor-pointer hover:underline hover:font-extrabold"
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
