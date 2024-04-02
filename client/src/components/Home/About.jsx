import React, { Fragment } from 'react';
import "../../styles/About.css";

const About = React.memo(() => {
  return (
    <Fragment>
      <main className="about-container">
        <h1 className='title-about'>About Us</h1>
        <section className='content-about'>
          <div className="img-about">
            <img src="assets/about-image.svg" loading="lazy" alt="about-image" />
          </div>
          <div className="about-paragraph font-mona-sans-semibold">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum sem id nibh vestibulum luctus. Vivamus mollis congue blandit. Maecenas in nunc ac mi tincidunt vulputate ac at ipsum. Nunc vitae arcu tempus, condimentum erat quis, pellentesque turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </div>
        </section>
      </main>
    </Fragment>
  );
});

About.displayName = 'About'; 
export default About;
