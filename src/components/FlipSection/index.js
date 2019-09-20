import React, { useState, useEffect } from 'react';
import "./flipSection.css"

const FlipSection = (props) => {

  const { store } = props;

  const [play, setPlay] = useState(false);

  useEffect(() => {
    console.log("Ran")
    let timer;
    if (play) {
      let pos = 0;
      console.log("true")
      const pictures = [].slice.call(document.querySelectorAll(".flipPic"));
      console.log(pictures)
      console.log(pictures.length)
      timer = setInterval(function() {
        if (pos >= pictures.length) {
          console.log("out")
          clearInterval(timer);
          setPlay(false);
        } else {
          console.log(pos);
          pictures.forEach(pic => pic.style.zIndex = "5");
          pictures[pos].style.zIndex = "10";
          pos++;
        }
      }, 150)
    }

    return () => {
      console.log("returning now")
      clearInterval(timer);
      setPlay(false)
    }

  }, [play, setPlay])

  return (
    <div className="flipSection">
      {store.map((image, i) =>
        <img src={image.src} className="flipPic" alt="rover" key={i} />
      )}

      <div className="flipControl">
        <button className="btn flipPlay" onClick={() => setPlay(true)}>Play</button>
      </div>
    </div>
  );
}

export default FlipSection;