import xIcon from "./assets/close_112dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.png";
import oIcon from "./assets/radio_button_unchecked_112dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.png";
import { BoxProps } from "./types";

function Box({
  box,
  setBox,
  userOne,
  setUserOne,
  userTwo,
  setUserTwo,
}: BoxProps) {
  const handleClick = () => {
    if (userOne.length > userTwo.length) {
      setBox({ ...box, mark: "o" });
      setUserTwo(
        [...userTwo, box.position]);
    } else {
      setBox({ ...box, mark: "x" });
      setUserOne([...userOne, box.position]);
    }
  };

  userOne && console.log("userone :", userOne);

  return (
    <>
      {!box.mark && (
        <div
          className="bg-black w-full h-full relative m"
          onClick={handleClick}
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
