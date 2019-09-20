import React, { useEffect } from 'react';
import "./flipSection.css"

const FlipSection = (props) => {

  const { store, play, setPlay } = props;

  useEffect(() => {
    console.log("Ran")
    let timer;
    if (play) {
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
    }

  }, [play, setPlay]);


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