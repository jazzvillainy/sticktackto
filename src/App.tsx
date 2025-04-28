import { useState } from "react";
import Box from "./Box";
import Overlay from "./Overlay";


interface box {
  position: number[];
  mark: string;
}

// type reactType = React.Dispatch<React.SetStateAction<box>>;

function App() {
  // const [array, setArray] = useState<object[]>([]);
  const [userOne, setUserOne] = useState<[]>([]);
  const [userTwo, setUserTwo] = useState<[]>([]);

  const [box1, setBox1] = useState<box>({
    position: [1, 1],
    mark: "",
  });

  const [box2, setBox2] = useState<box>({
    position: [1, 2],
    mark: "",
  });

  const [box3, setBox3] = useState<box>({
    position: [1, 3],
    mark: "",
  });

  const [box4, setBox4] = useState<box>({
    position: [2, 1],
    mark: "",
  });

  const [box5, setBox5] = useState<box>({
    position: [2, 2],
    mark: "",
  });

  const [box6, setBox6] = useState<box>({
    position: [2, 3],
    mark: "",
  });

  const [box7, setBox7] = useState<box>({
    position: [3, 1],
    mark: "",
  });

  const [box8, setBox8] = useState<box>({
    position: [3, 2],
    mark: "",
  });

  const [box9, setBox9] = useState<box>({
    position: [3, 3],
    mark: "",
  });

  // const boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const boxSetters = [
    [box1, setBox1],
    [box2, setBox2],
    [box3, setBox3],
    [box4, setBox4],
    [box5, setBox5],
    [box6, setBox6],
    [box7, setBox7],
    [box8, setBox8],
    [box9, setBox9],
  ];

  const oneTwoThree =
    userOne.find((i) => i == box1.position) &&
    userOne.find((i) => i == box2.position) &&
    userOne.find((i) => i == box3.position) &&
    true;
  const oneFourSeven =
    userOne.find((i) => i == box1.position) &&
    userOne.find((i) => i == box4.position) &&
    userOne.find((i) => i == box7.position) &&
    true;

  const oneFiveNine =
    userOne.find((i) => i == box1.position) &&
    userOne.find((i) => i == box5.position) &&
    userOne.find((i) => i == box9.position) &&
    true;

  const sevenEightNine =
    userOne.find((i) => i == box7.position) &&
    userOne.find((i) => i == box8.position) &&
    userOne.find((i) => i == box9.position) &&
    true;

  const threeSixNine =
    userOne.find((i) => i == box3.position) &&
    userOne.find((i) => i == box6.position) &&
    userOne.find((i) => i == box9.position) &&
    true;

  const fourFiveSix =
    userOne.find((i) => i == box4.position) &&
    userOne.find((i) => i == box5.position) &&
    userOne.find((i) => i == box6.position) &&
    true;

  const threeFiveSeven =
    userOne.find((i) => i == box3.position) &&
    userOne.find((i) => i == box5.position) &&
    userOne.find((i) => i == box7.position) &&
    true;

  const twoFiveEight =
    userOne.find((i) => i == box2.position) &&
    userOne.find((i) => i == box5.position) &&
    userOne.find((i) => i == box8.position) &&
    true;

  // userTwo conditionals

  const ThreeTwoOne =
    userTwo.find((i) => i == box1.position) &&
    userTwo.find((i) => i == box2.position) &&
    userTwo.find((i) => i == box3.position) &&
    true;

  const SevenFourOne =
    userTwo.find((i) => i == box1.position) &&
    userTwo.find((i) => i == box4.position) &&
    userTwo.find((i) => i == box7.position) &&
    true;

  const NineFiveOne =
    userTwo.find((i) => i == box1.position) &&
    userTwo.find((i) => i == box5.position) &&
    userTwo.find((i) => i == box9.position) &&
    true;

  const NineEightSeven =
    userTwo.find((i) => i == box7.position) &&
    userTwo.find((i) => i == box8.position) &&
    userTwo.find((i) => i == box9.position) &&
    true;

  const NineSixThree =
    userTwo.find((i) => i == box3.position) &&
    userTwo.find((i) => i == box6.position) &&
    userTwo.find((i) => i == box9.position) &&
    true;

  const SixFiveFour =
    userTwo.find((i) => i == box4.position) &&
    userTwo.find((i) => i == box5.position) &&
    userTwo.find((i) => i == box6.position) &&
    true;

  const SevenFiveThree =
    userTwo.find((i) => i == box3.position) &&
    userTwo.find((i) => i == box5.position) &&
    userTwo.find((i) => i == box7.position) &&
    true;
  const EightFiveTwo =
    userTwo.find((i) => i == box2.position) &&
    userTwo.find((i) => i == box5.position) &&
    userTwo.find((i) => i == box8.position) &&
    true;

  const winner: boolean | string =
    oneTwoThree ||
    oneFourSeven ||
    oneFiveNine ||
    sevenEightNine ||
    threeSixNine ||
    fourFiveSix ||
    threeFiveSeven ||
    twoFiveEight
      ? "userOne wins"
      : ThreeTwoOne ||
        SevenFourOne ||
        NineFiveOne ||
        NineEightSeven ||
        NineSixThree ||
        SixFiveFour ||
        SevenFiveThree ||
        EightFiveTwo
      ? "userTwo wins"
      : "";
  console.log(winner);

  return (
    <>
      {(userOne.length > 4 && winner == "") ||
      (userTwo.length > 4 && winner == "") ? (
        <div>game over</div>
      ) : (
        <div className="bg-stone-500 w-full max-lg:h-[100dvw] lg:w-1/2 h-[100dvh] grid grid-cols-3 gap-1 ">
          {boxSetters.map(([box, setBox], index: number) => {
            return (
              <Box
                key={index}
                box={box}
                setBox={setBox}
                userOne={userOne}
                userTwo={userTwo}
                setUserOne={setUserOne}
                setUserTwo={setUserTwo}
              />
            );
          })}
          {}
          {/* {userOne.length > 4 && !winner && userTwo.length > 4 && !winner ? (
            <h1 className="absolute">GAME OVER</h1>
          ) : (!winner && userOne.length > 4) ||
            (!winner && userTwo.length > 4) ? (
            <div>no winner</div>
          ) : (
            ""
          )} */}
          {userOne.length < 4 || userTwo.length < 4 ? (
            <h1 className=" bg-slate-500 absolute w-full">{winner}</h1>
          ) : (
            ""
          )}
          {<div className="absolute">{winner}</div>}
        </div>
      )}
      {/* <div className="bg-slate-400 absolute ">jlwdna</div> */}
      <Overlay oneTwoThree={oneTwoThree} ThreeTwoOne={ThreeTwoOne} />
    </>
  );
}

export default App;
