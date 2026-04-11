import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { SiGithub } from 'react-icons/si';

const SocialLogin = () => {
    return (
      <div>
        <h2 className="font-bold mb-10">Login with</h2>
        <div className="space-y-3">
          <button className="btn w-full btn-outline btn-secondary">
            {" "}
            <FcGoogle /> <span>Login with Google</span>
          </button>
          <button className="btn w-full btn-outline btn-primary">
            <SiGithub />Login with Github
          </button>
        </div>
      </div>
    );
};

export default SocialLogin;