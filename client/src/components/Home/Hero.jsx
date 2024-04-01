import React from 'react';
import "../../styles/About.css"

const Hero = React.memo(() => {
  return (
    <main className='flex flex-col gap-12 md:gap-24 md:px-24 px-4 pt-28 pb-40'>
      <article className='flex flex-col items-start'>
        <h1 className='flex font-extrabold items-center gap-4 md:gap-8 font-mona-sans-bold 
        text-4xl md:text-6xl lg:text-8xl xl:text-9xl'>
          <span className='text-white'>Cloud</span>
          <span className='gradient-text'>Native</span>
        </h1>
        <h2 className='md:pl-3 pl-1 text-xl md:text-3xl mt-2 md:mt-5 font-mona-sans-bold gradient-text'>NAGPUR</h2>
      </article>
      <section className='flex flex-col justify-center items-center'>
        <img className='image-hero' src="heroImagte.png" alt="image not coming" />
        <div style={{ marginTop: '-8rem' }} className='border-btn2 rounded-3xl flex items-center'>
          <button className='text-white md:text-lg text-base rounded-3xl btn-bg2 py-0.5 font-mona-sans-semibold px-6 md:px-7'>Join Us</button>
        </div>
      </section>
    </main>
  );
});

Hero.displayName = 'Hero';

export default Hero;  
