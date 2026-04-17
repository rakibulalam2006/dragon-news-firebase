import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const Register = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [nameError,setNameError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    if(name.length<5){
      setNameError("Name should be 5 character")
    }else{setNameError("")}
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ name, photo, email, password });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        updateUser({ displayName: name, photoURL:photo}).then(()=>{
          
          setUser({...user,displayName:name,photoURL:photo});
        })
        .catch((error)=>{
          // console.log(error);
          setUser(user);
        })
        toast("signup successful");
        navigate("/")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast(errorMessage, errorCode);
      });
  };
  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="mx-auto font-semibold text-xl">
            Register your account
          </h2>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Enter your name"
                required
              />
              {nameError && <p className="text-xs text-error">{nameError}</p>}
              {/* photo */}
              <label className="label">Photo URL</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Enter your photo"
              />
              {/* Email */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Enter your email address"
                required
              />
              {/* Password */}
              <label className="label">Password</label>
              <div className="relative">
                <input
                  name="password"
                  type={show ? "text" : "password"}
                  className="input"
                  placeholder="Password"
                  required
                />
                <span
                  className="absolute right-6 top-2 cursor-pointer z-50"
                  onClick={() => setShow(!show)}
                >
                  {show ? <FaRegEye size={23} /> : <FaEyeSlash size={23} />}
                </span>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-xs"
                  required
                />
                <p className="link link-hover">Accept Term & Conditions</p>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </fieldset>
          </form>
          <p className="font-semibold text-center">
            Already have An Account ?{" "}
            <Link to={"/auth/login"} className="text-red-500 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
