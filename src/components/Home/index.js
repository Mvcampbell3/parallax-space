import React, { useEffect } from 'react';

import {Link} from "react-router-dom";

import "./home.css"

const Home = (props) => {

  const scrollFunc = (e) => {
    const topBox = document.getElementById("bringIn");
    const bottomBox = document.getElementById("bringIn2");
    const topBoxTop = topBox.getBoundingClientRect().top;
    const bottomBoxTop = bottomBox.getBoundingClientRect().top;
    console.log(topBoxTop, bottomBoxTop);
    if (topBoxTop <= 450) {
      topBox.classList = "content mbot bringStart";
    } else {
      topBox.classList = "content mbot leave";
    }

    if (bottomBoxTop <= 400) {
      bottomBox.classList = "content linkBot bringStart";
    } else {
      bottomBox.classList = "content linkBot leave";
    }
  }

  useEffect(() => {
    document.body.addEventListener("scroll", scrollFunc)
    return () => {
      document.body.removeEventListener("scroll", scrollFunc)
    }
  }, [])

  return (
    <div className="homeWrapper">
      <div className="parallax-wrapper">
        <div className="content bringStart">
          <h1 className="text-center">Spirit and Opportunity</h1>
          <p className="text-center">Welcome To Mars</p>
        </div>
      </div>
      <div className="regular-wrapper">
        <div className="content leave" id="bringIn">
          <p className="text-center">Thousands and thousands of images from Mars.</p>
          <p className="text-center">This site helps you see them all</p>
        </div>

        <div>
          <Link to="/two" className="content leave" id="bringIn2">Explore</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;