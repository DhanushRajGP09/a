import React from 'react'
import { useState } from 'react';

export default function Modal() {
  const [isShown, setIsShown] = useState(true);

  const handleClick = (event:any) => {
    setIsShown((current:any) => !current);
  };

  return (
    <div>
      <div
        id="myModal"
        className="modal"
        style={{ display: isShown ? "block" : "none" }}
      >
        <div className="modal-content">
          <form action="">
            <div className="popup">
              <span className="add-site ">Add Site</span>
              <div className="group-9">
                <span className="urltext">URL</span>
                <input className="urlvalue" type="text" />
              </div>
              <div className="group-8">
                <div className="sitebox">
                  <span className="site-name">Site Name</span>
                  <input type="text" className="site-value" />
                </div>
                <div className="sectorbox">
                  <span className="sector-name">Sector/Folder</span>
                  <input type="text" className="sector-value" />
                </div>
              </div>
              <div className="group-7">
                <div className="namebox">
                  <span className="username-name">User Name</span>
                  <input type="text" className="username-value" />
                </div>
                <div className="passwordbox">
                  <span className="Password-name">Site Password</span>
                  <input type="text" className="Password-value" />
                </div>
              </div>
              <div className="group-6">
                <span className="notestext">NOTES</span>
                <input className="notesvalue" type="text" />
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: "319.5px",
                  marginTop: "32.5px",
                }}
              >
                <button className="Reset">
                  <span className="reset">RESET</span>
                </button>
                <button
                  className="Save"
                  name="submit"
                  value="submit"
                  onClick={handleClick}
                >
                  <span className="save">SAVE</span>
                </button>
              </div>
            </div>
          </form>

          <div className="close-btn" onClick={handleClick}>
            <img src="./images/close_btn.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
