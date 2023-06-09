import React from "react";
import "../About/About.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const About = () => {
  return (
    <article className="about-pg-container">
      <h2 className="about-header">About The Show</h2>
      <p className="about-text">
        "Lucifer" is a television series that originally premiered on Fox and later moved to Netflix. It is based on the DC Comics character created by Neil Gaiman, Sam Kieth, and Mike Dringenberg. The show follows Lucifer Morningstar, portrayed by Tom Ellis, who decides to abandon his throne in Hell and moves to Los Angeles. He becomes the owner of a nightclub called Lux and starts assisting the LAPD in solving various crimes.
      </p>
      <p className="about-text">
        The series combines elements of crime procedural, supernatural, and drama genres. It explores themes of redemption, morality, and the complexity of human nature. Over the seasons, "Lucifer" has gained a dedicated fanbase and has been praised for its charismatic performances, witty dialogue, and intriguing storylines.
      </p>
      <p className="about-text">
        The show has received critical acclaim and has been applauded for its unique blend of genres and compelling character development. It has also sparked discussions and fan theories due to its exploration of theological and philosophical concepts in a contemporary setting.
      </p>
      <p className="about-text">
        With its engaging storytelling and charismatic cast, "Lucifer" has become a popular series enjoyed by fans around the world. It has garnered a strong following and has been renewed for multiple seasons, captivating viewers with its mix of supernatural elements and compelling narratives.
      </p>
      <NavLink to="/">
        <button className="back-button">Back To Hompage</button>
      </NavLink>
    </article>
  );
};

export default About;

