import React, { useState, useEffect } from 'react';
import "./leftSide.css"

const LeftSide = (props) => {

  const { loading, setPics, info, setInfo, flipBook, setFlipBook, ready, setReady, setLoading } = props;

  const [rover, setRover] = useState(null);

  const [sol, setSol] = useState("");

  const [cameras, setCameras] = useState([]);

  const [selectedCamera, setSelectedCamera] = useState(null);

  // const [getPics, setGetPics] = useState(false);

  const [manifest, setManifest] = useState(null);

  useEffect(() => {
    if (rover) {
      let url = `https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=${process.env.REACT_APP_API_KEY}`;

      fetch(url)
        .then(response => response.json())
        .then(manifest => {
          console.log(manifest);
          setManifest(manifest.photo_manifest);
        })
        .catch(err => console.log(err))
    }
  }, [rover])

  useEffect(() => {
    setInfo(false);
    setFlipBook(false)
    setReady(false)
    setPics([]);
  }, [selectedCamera, sol, rover, setFlipBook, setInfo, setReady, setPics])

  useEffect(() => {
    setSol("");
    setCameras([])
    setPics([]);
    setSelectedCamera(null)
    setManifest(null);
  }, [rover, setPics])

  const handleSol = (e) => {
    const sol = e.target.value;
    console.log(sol);
    const rightSol = manifest.photos.filter(group => group.sol.toString() === sol);
    if (rightSol.length > 0) {
      const rightCameras = rightSol[0].cameras;
      console.log(rightCameras);
      setCameras(rightCameras);
      setSol(sol);
      setSelectedCamera(null);
    } else {
      setCameras([]);
      setSol(sol);
      setSelectedCamera(null)
    }
  }

  const setDisplay = (e) => {
    console.log(e.target.dataset.display);
    const whichDisplay = e.target.dataset.display;
    if (whichDisplay === "info") {
      setInfo(true);
      setFlipBook(false);
      setReady(true);
    } else {
      setInfo(false);
      setFlipBook(true);
      setReady(true);
    }
  }

  const getPictures = () => {
    setLoading(true);
    let url;

    if (selectedCamera === "All") {
      url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=${process.env.REACT_APP_API_KEY}`;
    } else {
      url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${selectedCamera}&api_key=${process.env.REACT_APP_API_KEY}`;
    }

    fetch(url)
      .then(response => response.json())
      .then(pictures => {
        console.log(pictures.photos);
        setPics(pictures.photos)
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="leftSide">
      <div className="control">

        <div className="controlBox">
          <div className="roverSelect selectDiv">
            <label htmlFor="rover">Select Rover</label>
            <div className="controlInside">
              <div className="roverBtns">
                <button
                  className={rover === "spirit" ? "btn roverBtn selected" : "btn roverbtn"}
                  onClick={() => setRover("spirit")}>
                  Spirit
                </button>
                <button
                  className={rover === "opportunity" ? "btn roverBtn selected" : "btn roverBtn"}
                  onClick={() => setRover("opportunity")}>
                  Opportunity
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="controlBox">
          {manifest ? <div className="solSelect selectDiv">
            <label htmlFor="sol">Max Sol: <span className="mobileBreak">{manifest.max_sol}</span></label>
            <div className="controlInside">
              <input className="solInput" type="number" name="sol" id="sol" placeholder="Sol..." autoComplete="off" value={sol}
                onChange={(e) => handleSol(e)} />
            </div>

          </div> : null}
        </div>

        <div className="controlBox">
          {cameras.length > 0 ? <div className="cameraSelect selectDiv">
            <label htmlFor="cameras">Select Camera</label>
            <div className="controlInside">
              <div className="cameraBtns">
                <button className={selectedCamera === "All" ? "btn camBtn selected" : "btn camBtn"} data-camera="All" onClick={() => setSelectedCamera("All")}>All</button>
                {cameras.map((cam, i) =>
                  <button key={i} className={selectedCamera === cam ? "btn camBtns selected" : "btn camBtn"} data-camera={cam} onClick={() => setSelectedCamera(cam)}>{cam}</button>
                )}
              </div>
            </div>
          </div> : null}
        </div>

        <div className="controlBox">
          {selectedCamera ? <div className="displaySelect selectDiv">
            <label htmlFor="display">Select Display</label>
            <div className="controlInside">
              <div className="displayBtns">
                <button className={info ? "btn dispBtn selected" : "btn dispBtn"} data-display="info" onClick={(e) => setDisplay(e)}>Information</button>
                <button className={flipBook ? "btn dispBtn selected" : "btn dispBtn"} data-display="flip" onClick={(e) => setDisplay(e)}>Flip Book</button>
              </div>

            </div>
          </div> : null}
        </div>

        <div className="controlBox">
          {ready ? <div className="controlInside">
            <button className="btn sendBtn" onClick={loading ? null : getPictures}>Get Pictures</button>
          </div> : null}
        </div>
      </div>
    </div>

  );
}

export default LeftSide;