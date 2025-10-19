import xIcon from "./assets/close_112dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.png";
import oIcon from "./assets/radio_button_unchecked_112dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.png";
import { SocketContext } from "./context";
import { BoxProps } from "./types";
import { useContext } from "react";

function Box({
  box,
  setBox,
  userOne,
  setUserOne,
  userTwo,
  setUserTwo,
}: BoxProps) {
  const SocketInstance = useContext(SocketContext);

  const handleClick = (clickedBoxPosition: number[]) => {
    if (userOne.length > userTwo.length) {
      setBox({ ...box, mark: "o" });
      setUserTwo([...userTwo, box.position.toString()]);
    } else {
      setBox({ ...box, mark: "x" });
      setUserOne([...userOne, box.position.toString]);
    }
    // const parsedKey = JSON.stringify(position);

    if (clickedBoxPosition == box.position) {
      try {
        if (!SocketInstance) throw new Error("there is no socekt connection");
        console.log(`attempting to send box ${clickedBoxPosition}`);
        userOne.length > userTwo.length
          ? SocketInstance?.send(
              JSON.stringify([
                { ...box, mark: "o" },
                { userTwo: [...userTwo, box.position], userOne },
              ])
            )
          : SocketInstance?.send(
              JSON.stringify([
                { ...box, mark: "x" },
                { userTwo, userOne: [...userOne, box.position] },
              ])
            );
      } catch (err) {
        console.log(err);
      }
    }
  };

  //if the incoming box id is == a certain box, update that box

  //user two should always be the data that travels over the ws
  //now its to find out how to make a multiple connections to one socket instance\
  // const parsedKey = JSON.parse(key);

  // useEffect(() => {}, [setBox]);

  // userOne && console.log("userone :", userOne);

  return (
    <>
      {!box.mark && (
        <div
          className="bg-black w-full h-full relative m"
          onClick={() => handleClick(box.position)}
        ></div>
      )}
      {box.mark && (
        <div className="bg-black w-full h-full relative m">
          {" "}
          {box.mark == "x" ? (
            <img src={xIcon} className="absolute scale-125 w-full" alt="" />
          ) : box.mark == "o" ? (
            <img src={oIcon} className="absolute w-full" color="red" />
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}

export default Box;
