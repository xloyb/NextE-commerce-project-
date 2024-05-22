import React from "react";

const mainGridHome = () => {
  return (
    <>
      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow md:h-32 lg:h-64 card bg-base-300 rounded-box place-items-center" style={{ backgroundColor: "#fccd25" }}>
          <img
            src="https://i.ebayimg.com/00/s/NTgxWDE2MDA=/z/~RIAAOSw3WhlxLJ2/$_57.JPG"
            width={700}
            height={500}
            alt="Picture"
          />
        </div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className="grid flex-grow md:h-32 lg:h-64 card bg-base-300 rounded-box place-items-center" style={{ backgroundColor: "#fccd25" }} >
          <img
            src="https://i.ebayimg.com/00/s/NTgxWDE2MDA=/z/~RIAAOSw3WhlxLJ2/$_57.JPG"
            width={700}
            height={500}
            alt="Picture"
          />
        </div>
      </div>
    </>
  );
};

export default mainGridHome;
