// import React from 'react'

function Overlay({ oneTwoThree,ThreeTwoOne }: { oneTwoThree: boolean; ThreeTwoOne:boolean }) {
  return (
    <>
      {(oneTwoThree || ThreeTwoOne) && (
        <div
          className={` w-full absolute top-0 lg:w-1/2 h-[100dvh]  `}
        >
          {<div className="border border-red-900 mt-[16.87dvh] h-5 blur bg-pink-400"></div>}
        </div>
      )}
    </>
  );
}

export default Overlay;
