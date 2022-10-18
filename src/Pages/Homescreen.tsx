import React from 'react'
import Header from '../Components/Header';
import Homebody from '../Components/Homebody';
import Sidemenu from '../Components/Sidemenu';

export default function Homescreen() {
  return (
    <div style={{ display: "flex", backgroundColor: "#F5F7FB" ,margin:"auto 12%"}}>
      <Sidemenu />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <Homebody />
      </div>
    </div>
  );
}
