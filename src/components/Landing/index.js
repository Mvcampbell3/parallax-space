import React, { useState, useEffect } from 'react';
import "./landing.css"

const Landing = (props) => {

  const messages = [
    "These two rovers we designed, engineered, and launched with an inital mission duration of 90 sols (martian days). They both made it a little bit longer than that number. On the control panel, you will be able to search their entire collection of images that are available through the NASA Mars Rovers API. Select a rover and a sol. The list of available cameras will show up. Some sols do not have images. If that happens, you will not see any cameras appear. Do not worry though, Spirit racked up 2208 sols and Oppotunity lasted an astonishing 5111. Enjoy!",

    "Mars has two moons, Phobos and Diemos. Each rover has caputured these moons transiting the sun. A Martian solar eclipse. A good example of this is on sol 45 for the rover Opportunity. Try using the Flip Book option!",

    "Spirit had many obstacles to overcome. About a quarter of the way through its mission, one of its wheel stopped working. You can see a trench left in the Martian soil where it had to drag the broken wheel. Fortunately, this acted as a kind of digging tool. The soil churned up very interesting minerals, leaving scientists to believe that Spirit was drudging through an ancient hot spring.",

    "Opportunity landed inside of a crater that had exposed bedrock on display. It was the first time Martian bedrock had been observed, and it gave way to many discoveries about the planet's early development.",

    "Inside of the Martian bedrock found by Oppourtunity, there were very tiny little spheres everywhere. Scientists named them 'blueberries' until they run enough experiments to find out what they really were. Turns out, they are made of hematite, an iron mineral mainly formed through interactions with water."
  ]

  const [whichMessage, setWhichMessage] = useState(null);

  useEffect(() => {
    const randNum = Math.floor((Math.random() * messages.length) + 0);
    console.log(randNum)
    setWhichMessage(randNum)
  }, [messages.length, setWhichMessage])

  return (
    <div className="landingPage">
      <h2 className="text-center landingTitle">Spirit and Opportunity</h2>
      <p className="landing-content">{props.initialLoad ? messages[0] : messages[whichMessage]}</p>
    </div>
  );
}

export default Landing;