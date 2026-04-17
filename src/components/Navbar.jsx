import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import userLogo from "../assets/user.png"
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = ()=>{
    logOut().then(()=>{
      toast("logout successful");
    }).catch((error) =>{
      toast(error.message);
      // console.log(error)
    })
    
  }
    return (
      <div className="flex justify-between items-center">
        <div className="">{user && user.email}</div>
        <div className=""></div>
        <div className="nav flex gap-5 text-accent">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/career"}>Career</NavLink>
        </div>
        <div className="login-btn flex gap-2">
          <img className='max-w-12 rounded-full' src={`${user ? user.photoURL : userLogo}`} alt="" />
          {user ? (
            <button onClick={handleLogout} className="btn btn-primary px-10">
              Logout
            </button>
          ) : (
            <Link to={"/auth/login"} className="btn btn-primary px-10">
              Login
            </Link>
          )}
        </div>
      </div>
    );
};

export default Navbar;