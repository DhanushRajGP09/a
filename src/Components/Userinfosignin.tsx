import React from "react";
import Signin from "./Signin";



export default function Userinfo() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{ display: "flex", flexDirection: "row", marginTop: "205px" }}
      >
        <div className="login-div">
          <div className="login-inside-div">
            <img className="logo" src="/images/logo.png" alt="" />
            <p className="protect-manage-eve">
              Protect & Manage every password in your business
            </p>
          </div>
          <div className="divider"></div>
          <div>
            <Signin />
          </div>
        </div>
      </div>
    </div>
  );
}
