import React, { useContext, useState} from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";


const Login = () => {
  const [error,setError]= useState();
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location)
  const [show,setShow] = useState(false);
  const handleLogin =(e) =>{
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    // console.log({email,password});
    signIn(email,password)
      .then((result) => {
       const user = result.user;
        // console.log(user)
        toast("login successful");
        navigate(`${location.state ?location.state:"/"}`)
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log(errorCode,errorMessage)
        setError(errorCode);
      });
  }
  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <h2 className="mx-auto font-semibold text-xl">Login your account</h2>
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* password */}
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
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {error && <p className="text-red-400 text-small">{error}</p>}

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </fieldset>
          <p className="font-semibold text-center">
            Dont’t Have An Account ?{" "}
            <Link to={"/auth/register"} className="text-red-500 font-semibold">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
