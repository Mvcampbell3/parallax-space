import React from 'react';

const InfoPic = (props) => {

  const { src, roverName, earthDate, cameraName, cameraFullName, sol } = props.img;

  return (
    <div className="infoPic">
      <img src={src} alt="rover" className="roverPic" />
      <div className="infoBox">
        <h3>Picture Infomation</h3>
        <div className="infoGroup">
          <span className="infoLabel">Sol:</span> <span className="infoText">{sol}</span>
          
        </div>
        <div className="infoGroup">
          <span className="infoLabel">Rover:</span> <span className="infoText">{roverName}</span>
          
        </div>
        <div className="infoGroup">
          <span className="infoLabel">Camera:</span> <span className="infoText">{cameraName}</span>
          
        </div>
        <div className="infoGroup">
          <span className="infoLabel">Camera Full Name:</span> <span className="infoText">{cameraFullName}</span>
          
        </div>
        <div className="infoGroup">
          <span className="infoLabel">Earth Date:</span> <span className="infoText">{earthDate}</span>
          
        </div>
      </div>
    </div>);
}

export default InfoPic;