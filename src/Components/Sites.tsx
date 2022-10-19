import React, { useEffect } from 'react'
import Sitescontainer from './Sitescontainer';
import { useState } from 'react';

export default function Sites(props:any) {
  
  
  return (
    <>
      <div className="category">
        <span className="social-media">Social Media</span>
        <div className="oval1">
          <span className="a07">{props.count}</span>
        </div>
        <div className="path-copy">
          <img src="/images/downarrow.png" alt="" />
        </div>
      </div>
      <div>
        <div id="aa1" className="sites-container">
          {
            props.data.map((item:any )=> {
              return (
                <Sitescontainer webname={item.webname} url={item.url} img={item.img} key={item.id}/>
              )
            })
          }
        </div>
      </div>
    </>
  );
}
