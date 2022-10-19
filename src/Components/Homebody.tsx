import React from 'react';
import { useState,useEffect } from 'react';
import Bodycontent from './Bodycontent';
import Modal from './Modal';
import Sites from './Sites';
import Sitescontainer from './Sitescontainer';
import { useNavigate } from 'react-router-dom';


export default function Homebody() {
  
  let [data, setData] = useState([
    {
      id: "1",
      webname: "FACEBOOK",
      url: "www.facebook.com",
      img: "./images/facebook.png",
    },
    {
      id: "2",
      webname: "YOUTUBE",
      url: "www.youtube.com",
      img: "./images/facebook.png",
    },
    {
      id: "3",
      webname: "YOUTUBE",
      url: "www.youtube.com",
      img: "./images/facebook.png",
    },
  ]);

  const [isShown, setIsShown] = useState(false);
  let [count, setCount] = useState(0);
  
  useEffect(() => {
    console.warn("useeffect"); 
    setSiteCount();  
  },[data]);   
  
function addData() {
      data.push({
        id: "4",
        webname: "YOUTUBE",
        url: "www.youtube.com",
        img: "./images/facebook.png",
      });
      setData([...data])
      console.log(data);
  } 

  function setSiteCount() {
    setCount(document.getElementsByClassName("container01").length);
  }
  const handleClick = (event: any) => {
    setIsShown((current: any) => !current);
  };

 
  
 
  
 
  
  return (
    <div>
      <Modal isShown={isShown} handleClick={handleClick} addData={addData}/>
      <div className="homebody">
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "91px",
              marginTop: "38px",
              height: "114px",
              width: "211px",
            }}
          >
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
