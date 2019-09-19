import React from 'react';

const InfoPic = (props) => {

  const { img_src } = props;

  return (
    <div className="infoPic">
      <img src={img_src} alt="rover" className="roverPic" />
      <div className="infoBox">

      </div>
    </div>);
}

export default InfoPic;