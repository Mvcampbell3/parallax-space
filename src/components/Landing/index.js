import React from 'react';
import "./landing.css"

const Landing = (props) => {

  const messages = [
    "These two rovers we designed, engineered, and launched with an inital mission duration of 90 sols (martian days). They both made it a little bit longer than that number. On the control panel, you will be able to search their entire collection of images that are available through the NASA Mars Rovers API. Select a rover and a sol. The list of available cameras will show up. Some sols do not have images. If that happens, you will not see any cameras appear. Do not worry though, Spirit racked up 2208 sols and Oppotunity lasted an astonishing 5111. Enjoy!",

    "This is another message"
  ]


  return (
    <div className="landingPage">
      <h2 className="text-center landingTitle">Spirit and Opportunity</h2>
      <p className="landing-content">{props.initialLoad ? messages[0] : messages[1]}</p>
    </div>
  );
}

export default Landing;