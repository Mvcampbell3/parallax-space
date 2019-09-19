import React, { useEffect, useState } from 'react';
import "./rightSide.css"

import InfoPic from "../InfoPic";


const RightSide = (props) => {

  const { pics, loading, setLoading, info, flip, setReady } = props;

  const [store, setStore] = useState([]);

  useEffect(() => {
    if (pics.length > 0) {
      let saved = [];
      pics.forEach((pic, i) => {
        const newImg = new Image();
        newImg.alt = "rover";
        newImg.src = pic.img_src;
        newImg.id = pic.id;
        newImg.classList = "roverPic";
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
        {pics.length > 0 ? <div className="pictureViewer">
          {info ? <div>
            {store.map((pic, i) =>
              <InfoPic img_src={pic.src} key={`pic${i}`} />
            )}
          </div> : <div>Flip Book</div>}
        </div> : <div>Landing</div>}
      </>}
    </div>
  );
}

export default RightSide;