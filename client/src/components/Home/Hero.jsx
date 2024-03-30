import React from 'react';

const Hero = React.memo(() => {
  return (
    <main className='flex flex-col gap-12 md:gap-24 md:px-24 px-4 pt-28 pb-40'>
      <article className='flex flex-col items-start'>
        <h1 className='flex font-extrabold items-center gap-4 md:gap-8 font-mona-sans-bold text-5xl md:text-9xl'>
          <span className='text-white'>Cloud</span>
          <span className='gradient-text'>Native</span>
        </h1>
        <h2 className='md:pl-3 pl-1 text-xl md:text-3xl mt-2 md:mt-5 font-mona-sans-bold gradient-text'>NAGPUR</h2>
      </article>
      <section className='flex justify-center items-center'>
        <div className='border-btn2 rounded-3xl flex items-center'>
          <button className='text-white md:text-lg text-base rounded-3xl btn-bg2 py-0.5 font-mona-sans-semibold px-6 md:px-7'>Join Us</button>
        </div>
      </section>
    </main>
  );
});

export default Hero;
