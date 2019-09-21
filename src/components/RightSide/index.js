import React, { useEffect, useState } from 'react';
import "./rightSide.css"

import InfoPic from "../InfoPic";
import FlipSection from "../FlipSection";


const RightSide = (props) => {

  const { pics, loading, setLoading, info } = props;

  const [store, setStore] = useState([]);

  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (pics.length > 0) {
      let saved = [];
      pics.forEach((pic, i) => {
        const newImg = new Image();
        newImg.alt = "rover";
        newImg.src = pic.img_src;
        newImg.id = pic.id;
        newImg.classList = "roverPic";
        newImg.roverName = pic.rover.name;
        newImg.cameraName = pic.camera.name;
        newImg.cameraFullName = pic.camera.full_name;
        newImg.earthDate = pic.earth_date;
        newImg.sol = pic.sol;
        newImg.onload = () => {
          saved.push(newImg);
          if (saved.length === pics.length) {
            const ordered = saved.sort((a, b) => a.id - b.id);
            console.log(ordered)
            setStore(ordered);
            setLoading(false);
          }
        }
      })
    }
  }, [pics, setStore, setLoading])

  return (
    <div className="rightSide">
      {loading ? <div>Loading</div> : <>
        {pics.length > 0 ?

          <>
            {
              info ?

                <div className="displayHolder gridCenterCenter">
                  <div className="regDisplay">
                    {store.map((image, i) =>
                      <InfoPic key={`image${i}`} img={image} />
                    )}
                  </div>
                </div>

                :

                <div className="flipDisplay gridCenterCenter">
                  <FlipSection store={store} play={play} setPlay={setPlay} />
                </div>
            }
          </> : <div>Landing</div>}
      </>}
    </div>
  );
}

export default RightSide;