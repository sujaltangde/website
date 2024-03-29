import CountUp from 'react-countup'


export const Projects = () => {
  return (
    <section className='text-white font-mona-sans-bold md:px-36 px-10 py-44'>
      <div className='md:flex md:flex-row flex-col'>
        <div className='md:w-2/3 w-full flex flex-col gap-8'>
          <h1 className='md:text-5xl text-3xl'><span className='textSpan'>CNCF</span> Projects are the foundation of cloud native computing</h1>
          <p className='md:text-xl pr-12 text-sm'>As part of the <span className='textSpan'>Linux Foundation</span>, we provide support, oversight, and direction for fast-growing, <span className='textSpan'>cloud native</span> projects, including Kubernetes, Envoy, and Prometheus.</p>
        </div>
        <div className='md:w-1/3 md:mt-0 mt-9 w-full flex md:flex-col gap-10 md:gap-11 justify-center items-end md:pr-12'>
          <div className='flex md:flex-row flex-col items-center gap-1 md:gap-4'>
            <span className='text-5xl md:text-5xl textSpan'> 
            <CountUp
            className='textSpan'
              start={0}
              end={26}
              duration={4}
              delay={0.2}
            />
            </span>
            <div className='flex text-xs md:text-sm flex-col'>
              <span>Graduated</span>
              <span>Projects</span>
            </div>
          </div>
          <div className='flex md:flex-row flex-col items-center gap-1 md:gap-4'>
            <span className='text-5xl md:text-5xl textSpan'><CountUp
            className='textSpan'
              start={0}
              end={36}
              duration={4}
              delay={0.2}
            /></span>
            <div className='flex text-xs md:text-sm flex-col'>
              <span>Incubating</span>
              <span>Projects</span>
            </div>
          </div>
          <div className='flex md:flex-row flex-col items-center gap-1 md:gap-4'>
            <span className='text-5xl md:text-5xl textSpan'><CountUp
            className='textSpan'
              start={0}
              end={113}
              duration={4}
              delay={0.9}
            /></span>
            <div className='flex text-xs md:text-sm flex-col'>
              <span>Sandbox</span>
              <span>Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
