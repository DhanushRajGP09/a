import React from 'react'

export default function Sitescontainer(props:any) {
  return (
    <div>
      <div className="container01">
        <div className="site-details">
          <div className="bitmap">
            <img src={props.img} alt="" />
          </div>
          <span className="facebook">{props.webname}</span>
          <div className="copy">
            <img src="/images/copy.png" alt="" />
            <span className="copy-password">Copy Password</span>
          </div>
        </div>
        <span className="www-facebook-com">{props.url}</span>
      </div>
    </div>
  );
}
