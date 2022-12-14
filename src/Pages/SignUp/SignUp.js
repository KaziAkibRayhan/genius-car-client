import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const providerGoogle = new GoogleAuthProvider();
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };
  const handleGoogleLogIn = () => {
    googleSignIn(providerGoogle)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="hero w-full py-20">
      <div className="hero-content gap-20 grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-14">
          <h2 className="text-4xl text-center font-bold">Sign Up</h2>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-center">
            Already have an account?{" "}
            <Link to={"/login"} className="text-orange-600 font-bold">
              Login
            </Link>
          </p>
          <p className="text-center">
            <small>Or Sign Up with</small>
          </p>
          <div className="flex justify-center mt-2">
            <button
              onClick={handleGoogleLogIn}
              className="p-2 bg-slate-200 rounded-full"
            >
              <FcGoogle className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
