import React, { useEffect } from 'react';
import "./flipSection.css"

const FlipSection = (props) => {

  const { store, play, setPlay } = props;

  useEffect(() => {
    console.log("Ran")
    let timer;
    if (play) {
      setPlay(true);
      let pos = 0;
      console.log("true")
      const pictures = [].slice.call(document.querySelectorAll(".flipPic"));
      timer = setInterval(function() {
        if (pos >= pictures.length) {
          clearInterval(timer);
          setPlay(false)
        } else {
          pictures.forEach(one => one.style.zIndex = "5");
          pictures[pos].style.zIndex = "10";
          pos++;
        }
      },
        150)
    };

    return () => {
      console.log("return ran");
      clearInterval(timer)
      setPlay(false);
    }

  }, [play, setPlay]);


  return (
    <div className="flipSection">
      <h4 className="text-center bg-black">Number of Images: {store.length}</h4>
      <div className="flipPicHolder">
        <div className="blocker"></div>
        {store.map((image, i) =>
          <img src={image.src} className="flipPic" alt="rover" key={i} />
        )}
      </div>


      <div className="flipControl">
        <button className={play ? "btn flipPlay played": "btn flipPlay"} onClick={play ? null : () => setPlay(true)}>Play</button>
      </div>
    </div>
  );
}

export default FlipSection;