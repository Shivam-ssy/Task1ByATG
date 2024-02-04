import React from "react";
import '../scss/global.scss'
import Navigation from './component/Navigation.js';
import HomePage from "./component/HomePage.js";
import Page2 from "./component/Page2";
import Page3 from "./component/Page3";
import Page4 from "./component/Page4";
import Page5 from "./component/Page5";
import Footer from "./component/Footer";

function Home() {
  return (
    <>
        <div className="containrer-fluid">
          <Navigation />
          <HomePage />  
          <Page2/>
          <Page3/>  
          <Page4/> 
          <Page5/>
          <Footer/>   
        </div>
    </>
  )
}
export default Home;
