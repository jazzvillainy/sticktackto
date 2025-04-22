import React, { useCallback } from "react";
import xIcon from "./assets/close_112dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.png";
import oIcon from "./assets/radio_button_unchecked_112dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.png";
// import { useState } from "react";
// React.Dispatch<React.SetStateAction<box>>;
interface box {
  position: number[];
  mark: string;
}

interface props {
  box: box;
  setBox: React.Dispatch<React.SetStateAction<box>>;
  boxSetters?: [];
  userOne: [[], []];
  setUserOne: React.Dispatch<React.SetStateAction<object[]>>;
  userTwo: [[], []];
  setUserTwo: React.Dispatch<React.SetStateAction<object[]>>;
}

// type setbox = React.Dispatch<React.SetStateAction<box>>;
function Box({ box, setBox, userOne, setUserOne, userTwo, setUserTwo }: props) {
  // setTimeout(() => console.log("userOne:", userOne), 2000);

  // useCallback(() => setUserOne([...userOne, box]), []);
  const handleClick = () => {
    // console.log();

    if (userOne.length > userTwo.length) {
      setBox({ ...box, mark: "o" });
      setUserTwo([...userTwo, box.position]);
    } else {
      setBox({ ...box, mark: "x" });
      setUserOne([...userOne, box.position]);
    }

    // useCallback(,[box]);
    // setUserOne([...userOne, box])
    // if (userOne.length > userTwo.length) {
    //    setBox({ ...box, mark: "o" });
    //   setUserTwo((prev) => [...prev, box]);
    //   setUserTwo((prev) => [...prev, box]);
    // } else {
    //   setUserOne((prev) => [...prev, box]);
  };
  // console.log(box);
  userOne && console.log("userone :", userOne);
  // const boxStyle = {
  //   width: "50px",
  //   height: "50px",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   border: "1px solid black",
  //   cursor: "pointer",
  // };
  // console.log("usertwo :", userTwo);

  return (
    <div className="bg-black w-full h-full relative m" onClick={handleClick}>
      {box.mark == "x" ? (
        <img src={xIcon} className="absolute scale-125 w-full" alt="" />
      ) : box.mark == "o" ? (
        <img src={oIcon} className="absolute w-full" color="red" />
      ) : (
        ""
      )}
    </div>
  );
}

export default Box;
