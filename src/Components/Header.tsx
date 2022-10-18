import React from 'react'

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="home-logo">
          <img src="/images/pass_logo.png" alt="" />
        </div>
        <div className="refresh">
          <img src="/images/sync.png" alt="" style={{ marginTop: "13px" }} />
        </div>
        <div className="profile">
          <img src="/images/profile.png" alt="" style={{ marginTop: "13px" }} />
        </div>
      </div>
    </div>
  );
}
