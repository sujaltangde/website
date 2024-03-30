import { Fragment } from "react";

const ComingSoon = () => {
  return (
    <Fragment>
      <main className="center-container flex gap-3  md:gap-9 md:pb-0 pb-28 items-center text-4xl md:text-9xl">
        <span style={{fontFamily:'Mona Sans', fontWeight:'600'}}>Coming</span><span style={{fontFamily:'Mona Sans', fontWeight:'600'}} className="gradient-text py-4 ">Soon</span>
      </main>
    </Fragment>
  );
};

export default ComingSoon ;
