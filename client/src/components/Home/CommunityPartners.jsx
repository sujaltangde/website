import React from "react";

const CommunityPartners = React.memo(() => {
  return (
    <main>
      <div className="flex justify-center items-center flex-col mb-14 ">
        <div>
          <p className="headingT">Community Partners</p>
        </div>
        <div className="parternersContent w-11/12 md:w-10/12 mb-14 mt-14"></div>
      </div>
    </main>
  );
});

CommunityPartners.displayName = "Community CNCF";

export default CommunityPartners;
