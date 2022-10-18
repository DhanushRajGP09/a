import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {

  const navigate = useNavigate();



  return (

    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="signup-div">
        <span className="sign-up">SIGN UP</span>
        <div className="field-outline">
          <input
            className="mobile-number"
            placeholder="Enter Mobile Number"
          ></input>
        </div>
        <div className="field-outline" style={{ marginTop: "16px" }}>
          <input className="m-pin" placeholder="Enter 4 Digit MPin" />
        </div>
        <div className="field-outline" style={{ marginTop: "16px" }}>
          <input className="m-pin" placeholder="Re-Enter 4 Digit MPin" />
          <div className="eye">
            <img src="/images/eye_on.png" alt="" />
          </div>
        </div>
      </div>
      <button
        className="signup-button-background"
        onClick={() => {
          navigate("/homescreen");
        }}
      >
        <span
          className="sign-up-button-text"
          
        >
          SIGN UP
        </span>
      </button>
    </div>
  );
}

