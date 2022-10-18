import React from 'react'
import Homescreen from '../Pages/Homescreen';
import { Link,useNavigate} from "react-router-dom";

export default function Signin() {

  const navigate = useNavigate();


  return (
    <div className="signin-div">
      <div>
        <span className="sign-in-to-your-acco">SIGN IN TO YOUR ACCOUNT</span>
        <div className="field-outline">
          <input className="mobile-number" placeholder="Mobile Number"></input>
        </div>
        <div className="field-outline" style={{ marginTop: "16px" }}>
          <input className="m-pin" placeholder="MPin" />
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
            navigate("/homescreen");
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
