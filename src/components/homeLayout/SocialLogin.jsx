import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { AuthContext } from "../../provider/AuthProvider";

const SocialLogin = () => {
  const { googleSignin } = useContext(AuthContext);
  const { githubSignin } = useContext(AuthContext);
  const handleGoogleLogin = () =>{
    googleSignin()
    .then((result) =>{
      console.log(result.user)
    })
    .catch((error) =>{
      console.log(error.message);
    })
  }
  const handleGitHubSignIn = () =>{
    githubSignin()
    .then((result)=>{

       // The signed-in user info.
       const user = result.user;
      console.log(user)
    })
    .catch((error) =>{
      console.log(error);
    })
  }
  return (
    <div>
      <h2 className="font-bold mb-10">Login with</h2>
      <div className="space-y-3">
        <button
          onClick={handleGoogleLogin}
          className="btn w-full btn-outline btn-secondary"
        >
          {" "}
          <FcGoogle /> <span>Login with Google</span>
        </button>
        <button
          onClick={handleGitHubSignIn}
          className="btn w-full btn-outline btn-primary"
        >
          <SiGithub />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
