import React from 'react';
import "./landing.css"

const Landing = (props) => {
  return ( 
  <div className="landingPage">
    <h2>Spirit and Oppotunity</h2>
    <p className="landing-content">These two rovers we designed, engineered, and launched with an inital mission duration of 90 sols (martian days). They both made it a little bit longer than that number. On the control panel, you will be able to search their entire collection of images that are available through the NASA Mars Rovers API. Select a rover and a sol, and then a list of cameras that are available will be visable. Some sols do not have images, if that happens, you will not see any cameras appear. Do not worry through, Spirit racked up 2208 sols and Oppotunity lasted an astonishing 5111. Enjoy!</p>
  </div>
   );
}
 
export default Landing;