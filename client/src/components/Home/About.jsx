import React, { Fragment } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import "../../styles/About.css";

const defaultOptions = {
	reverse:        true,  
	max:            25,     
	perspective:    10000,   
	scale:          1,   
	speed:          10000,   
	transition:     true,  
	axis:           null,   
	reset:          true,    
	easing:         "cubic-bezier(.03,.98,.52,.99)",   
}


const About = React.memo(() => {
  return (
    <Fragment>
      <main className="about-container">
        <h1 className="title-about">About Us</h1>
        <Tilt options={defaultOptions} className="xs:w-[220px] flex align-center justify-center">
          <section className="content-about">
            <motion.div
              variants={fadeIn("right", "spring", 0.5 * 1, 0.75)}
              className="img-about"
            >
              <img
                className="cncf-logo-about"
                src="assets/cncf-logo.svg"
                loading="lazy"
                alt="about-image"
              />
              <h4 className="head-1">CLOUD NATIVE</h4>
              <h3 className="head-2">COMPUTING FOUNDATION</h3>
              <img
                src="assets/WebLogoCncf.svg"
                loading="lazy"
                alt="about-image"
              />
            </motion.div>
            <div className="about-paragraph font-mona-sans-semibold">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur condimentum sem id nibh vestibulum luctus. Vivamus
                mollis congue blandit. Maecenas in nunc ac mi tincidunt
                vulputate ac at ipsum. Nunc vitae arcu tempus, condimentum erat
                quis, pellentesque turpis. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas.
              </p>
            </div>
          </section>
        </Tilt>
      </main>
    </Fragment>
  );
});

About.displayName = "About";
export default About;
