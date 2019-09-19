import React, { useEffect, useState } from 'react';
import "./rovers.css"

import LeftSide from "../LeftSide";
import RightSide from "../RightSide";

const Rovers = (props) => {

  const [pics, setPics] = useState([]);

  const [loading, setLoading] = useState(false);

  const [flipBook, setFlipBook] = useState(false);
  
  const [info, setInfo] = useState(false);

  const [ready, setReady] = useState(false);

  return (
    <div className="container">
      <LeftSide
        pics={pics}
        setPics={setPics}
        loading={loading}
        setLoading={setLoading}
        flipBook={flipBook}
        setFlipBook={setFlipBook}
        info={info}
        setInfo={setInfo}
        ready={ready}
        setReady={setReady}
      />
      <RightSide 
        pics={pics}
        loading={loading}
        setLoading={setLoading}
        info={info}
        flipBook={flipBook}
      />
    </div>
  );
}

export default Rovers;