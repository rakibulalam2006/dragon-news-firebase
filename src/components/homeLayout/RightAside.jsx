import React from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "./FindUs";
import QZone from "./Qzone";

const RightAside = () => {
  return <div className="space-y-5">
    <SocialLogin></SocialLogin>
    <FindUs />
    <QZone></QZone>
  </div>;
};

export default RightAside;
