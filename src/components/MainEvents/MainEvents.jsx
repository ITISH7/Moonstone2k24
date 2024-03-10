import React, { useEffect, useState } from "react";
import EventCard from "../common/EventCard/EventCard";
import classes from "./MainEvents.module.css";
// import SwupOverlayTheme from "@swup/overlay-theme";
// import Swup from "swup";
// import { eventsData } from "../../assets/eventsData";
import axios from "axios";
import ReactGA from "react-ga";

const MainEvents = () => {
  // const swup = new Swup({
  //   plugins: [
  //     new SwupOverlayTheme({
  //       color: "#2D2E82",
  //       duration: 600,
  //       direction: "to-right",
  //     }),
  //   ],
  // });
  // cultural link
  const [getculturalData, setGetCulturalData] = useState([]);
  useEffect(() => {
    axios
      .get("https://moonstone-backend-9dhg.onrender.com/events/alleventData")
      .then((res) => {
        console.log(res.data);
        setGetCulturalData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });

  // soprts link

  const [getSportsData, setGetSportsData] = useState([]);
  useEffect(() => {
    axios
      .get("https://moonstone-backend-9dhg.onrender.com/events/alleventData")
      .then((res) => {
        console.log(res.data);
        setGetSportsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });

  // techno events
  const [getTechoData, setGetTechnoData] = useState([]);
  useEffect(() => {
    axios
      .get("https://moonstone-backend-9dhg.onrender.com/events/alleventData")
      .then((res) => {
        console.log(res.data);
        setGetTechnoData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });

  // night event

  const [getNightData, setGetNightData] = useState([]);
  useEffect(() => {
    axios
      .get("https://moonstone-backend-9dhg.onrender.com/events/alleventData")
      .then((res) => {
        console.log(res.data);
        setGetNightData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });

  return (
    <>
      <div className={classes.events_section}>
        {/* <h1 className={classes.heading}>Events</h1> */}
        {/* <img src="x" alt="" /> */}

        {/* buttons */}
        {/* <h1 className={classes.heading} id="cul">Events</h1> */}

        {/* this are the categoary wise div */}
        <h1 className={classes.heading}>Cultural</h1>
        <div className={classes.events_container} id="cul">
          {getculturalData.map((eventData, i) => {
            return <>{eventData.event_category === "cultural" ? <EventCard eventData={eventData} key={i} /> : null}</>;
          })}
        </div>

        <br />
        <br />

        <br />
        <hr />
        <h1 className={classes.heading}>Sports</h1>

        <div className={classes.events_container} id="sports">
          {getSportsData.map((eventData, i) => {
            return eventData.event_category === "sports" ? <EventCard eventData={eventData} key={i} /> : null;
          })}
        </div>

        <br />
        <br />

        <br />
        <hr />
        <h1 className={classes.heading} id="techno">
          Techno
        </h1>

        <div className={classes.events_container} id="techno">
          {getTechoData.map((eventData, i) => {
            return eventData.event_category === "Techno" ? (
              <>
                {/* <h1 className={classes.heading}>Techno</h1> */}
                <EventCard eventData={eventData} key={i} />
              </>
            ) : null;
          })}
        </div>
        <br />
        <br />
        <br />
        <hr />
        {/* <hr /> */}
        <h1 className={classes.heading}>Night Events</h1>

        <div className={classes.events_container} id="night">
          {getNightData.map((eventData, i) => {
            return (eventData.event_category === "night" ? <>
              <h1 className={classes.heading}>Techno</h1>
              <EventCard eventData={eventData} key={i} /></> : null);
          })}
        </div>
      </div>
    </>
  );
};

export default MainEvents;
