import React from 'react';
import { useState,useEffect } from 'react';
import Bodycontent from './Bodycontent';
import Modal from './Modal';
import Sites from './Sites';
import Sitescontainer from './Sitescontainer';
import { useNavigate } from 'react-router-dom';


export default function Homebody() {
  
  let [data, setData] = useState([]);

  const [isShown, setIsShown] = useState(false);
  let [count, setCount] = useState(0);
  
const sitesdata = async() => {
    let url = "http://localhost:5000/data";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    setData(parsedData)
    setCount(document.getElementsByClassName("container01").length);
}
  
  
  
useEffect(() => {
    sitesdata();
    console.warn("useeffect"); 
  },[]);    
  

  const handleClick = (event: any) => {
    setIsShown((current: any) => !current);
  };

  return (
    <div>
      <Modal isShown={isShown} handleClick={handleClick} />
      <div className="homebody">
        <div className="header-down2" style={{ display: "flex" }}>
          <div className='header-down'>
            <span className="sites">Sites</span>
            <div className="heading-focus"></div>
          </div>
          <div
            className="search-icn"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div style={{ display: "flex" }}>
              <input className="search" placeholder="search"></input>
              <div className="search-icon-div">
                <img src="/images/search.png" alt="" />
              </div>
            </div>
            <div className="search-bottom"></div>
          </div>
          <div className="add-btn">
            <img
              src="/images/add.png"
              alt=""
              onClick={handleClick}
            />
          </div>
        </div>
        <Sites data={data} count={count} />
      </div>
    </div>
  );
}
