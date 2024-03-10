import classes from "./About_video.module.css";

import React from "react";

const AboutVideo = () => {
  // const playerRef = useRef(null);
  return (
    <>
      <section id="about" className={classes.aboutSec}>
        <div className={classes.about}>
          <div className={classes.composition}>
            <video src="https://res.cloudinary.com/dulzutyqm/video/upload/v1709627722/moonvid3_cvk8hf.mp4" autoPlay muted loop></video>
          </div>
          <div className={classes.details}>
            <h3 className={classes.heading}>
              {" "}
              <i>About</i>
            </h3>
            <h2 className={classes.heading1}>Moonstone</h2>
            <p className={classes.para}>Moonstone is part of the mineral family of feldspars. It's an opalescent stone that can be found in colorless form as well as peach, pink, green, gray, yellow, brown, and blue. The play of light seen in Moonstone is called adularescence, and its clarity ranges from transparent to opaque.</p>

            {/* <p className={classes.para}>
                Spectacular talent stretches boundaries to inspire the participating
                students and the rapt audience alike. A gigantic range of events
                from advanced robotics challenges to entrepreneurship hunts
                promising to zap up the cranial indices of participants. Skill,
                genius and knowledge trading infused with a handful of fun, and a
                titanic prize money sum of above half a million rupees to make Karma
                one of the most unique tech carnivals of the country.
              </p> */}
            {/* <div className={classes.btn}>
                <Button label="Explore" />
              </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutVideo;
