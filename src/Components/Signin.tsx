import React from 'react'
import { useState,useEffect } from 'react';
import Homescreen from '../Pages/Homescreen';

import { Link,useNavigate} from "react-router-dom";

export default function Signin() {
  const [mobilenumber, setmobilenumber] = useState("");
  const [mpin, setMpin] = useState("");
  
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/homescreen");
    }
  }, []);

  const handleLogin = async () => {
    let result = await fetch("http://localhost:5000/signin", {
      method: "post",
      body: JSON.stringify({ mobilenumber, mpin }),
      headers: {
        "Content-Type": "application/JSON",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/homescreen");
    } 
    else {
      alert("Please enter the correct details");
    }
  };




  return (
    <div className="signin-div">
      <div>
        <span className="sign-in-to-your-acco">SIGN IN TO YOUR ACCOUNT</span>
        <div className="field-outline">
          <input className="mobile-number" placeholder="Mobile Number" value={mobilenumber} onChange={(e)=>setmobilenumber(e.target.value)}></input>
        </div>
        <div className="field-outline" style={{ marginTop: "16px" }}>
          <input className="m-pin" placeholder="MPin" value={mpin} onChange={(e) => setMpin(e.target.value)}/>
          <div className="eye">
            <img src="/images/eye_on.png" alt="" />
          </div>
        </div>
      </div>
      <div className="forgot">
        <span className="forgot-your-password">Forgot your password?</span>
        <button
          className="button-background"
          onClick={() => {
            handleLogin();
          }}
        >
          <span className="sign-in">SIGN IN</span>
        </button>
        <span
          className="dont-have-a-account"
          style={{ marginLeft: "0px", marginTop: "58px" }}
        >
          Don’t have a Account? <a style={{cursor:"pointer",textDecoration:"none",color:"white"}} href="/signup">SIGNUP</a>
        </span>
      </div>
    </div>
  );
}
