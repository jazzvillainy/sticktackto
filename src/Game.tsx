import { useContext, useState } from "react";
import Box from "./Box";
import Overlay from "./Overlay";
import { box, wincombination } from "./types";
import { SocketContext } from "./context";


export function Game() {
  const [userOne, setUserOne] = useState<number[][]>([]);
  const [userTwo, setUserTwo] = useState<number[][]>([]);

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

  const boxSetters: [box, React.Dispatch<React.SetStateAction<box>>][] = [
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

  type data = string;

  const SocketInstance = useContext(SocketContext);

  SocketInstance?.addEventListener("message", (x: MessageEvent<data>) => {
    const [
      {
        position: [i, j],
        mark,
      },
      transferredStates,
    ] = JSON.parse(x.data);

    // console.log("message recieved:", "other user:", transferredStates);

    // console.log("transferred state:", transferredStates.userOne[0]);
    console.log("box1:", box1.position);

    transferredStates.userOne[0] == box1.position && console.log("identical");

    setUserTwo([...transferredStates.userTwo]);
    setUserOne([...transferredStates.userOne]);

    boxSetters.map(
      ([
        {
          position: [x, y],
        },
        setBox,
      ]) => {
        if (i == x && j == y) {
          setBox({ position: [i, j], mark });
        }
        // console.log(otherUser);
      }
    );
  });

  const oneTwoThree: wincombination =
    userOne.find((i) => i == box1.position) &&
    userOne.find((i) => i == box2.position) &&
    userOne.find((i) => i == box3.position) &&
    true;
  const oneFourSeven: wincombination =
    userOne.find((i) => i == box1.position) &&
    userOne.find((i) => i == box4.position) &&
    userOne.find((i) => i == box7.position) &&
    true;

  const oneFiveNine: wincombination =
    userOne.find((i) => i == box1.position) &&
    userOne.find((i) => i == box5.position) &&
    userOne.find((i) => i == box9.position) &&
    true;

  const sevenEightNine: wincombination =
    userOne.find((i) => i == box7.position) &&
    userOne.find((i) => i == box8.position) &&
    userOne.find((i) => i == box9.position) &&
    true;

  const threeSixNine: wincombination =
    userOne.find((i) => i == box3.position) &&
    userOne.find((i) => i == box6.position) &&
    userOne.find((i) => i == box9.position) &&
    true;

  const fourFiveSix: wincombination =
    userOne.find((i) => i == box4.position) &&
    userOne.find((i) => i == box5.position) &&
    userOne.find((i) => i == box6.position) &&
    true;

  const threeFiveSeven: wincombination =
    userOne.find((i) => i == box3.position) &&
    userOne.find((i) => i == box5.position) &&
    userOne.find((i) => i == box7.position) &&
    true;

  const twoFiveEight: wincombination =
    userOne.find((i) => i == box2.position) &&
    userOne.find((i) => i == box5.position) &&
    userOne.find((i) => i == box8.position) &&
    true;

  // userTwo conditionals

  const ThreeTwoOne: wincombination =
    userTwo.find((i) => i == box1.position) &&
    userTwo.find((i) => i == box2.position) &&
    userTwo.find((i) => i == box3.position) &&
    true;

  const SevenFourOne: wincombination =
    userTwo.find((i) => i == box1.position) &&
    userTwo.find((i) => i == box4.position) &&
    userTwo.find((i) => i == box7.position) &&
    true;

  const NineFiveOne: wincombination =
    userTwo.find((i) => i == box1.position) &&
    userTwo.find((i) => i == box5.position) &&
    userTwo.find((i) => i == box9.position) &&
    true;

  const NineEightSeven: wincombination =
    userTwo.find((i) => i == box7.position) &&
    userTwo.find((i) => i == box8.position) &&
    userTwo.find((i) => i == box9.position) &&
    true;

  const NineSixThree: wincombination =
    userTwo.find((i) => i == box3.position) &&
    userTwo.find((i) => i == box6.position) &&
    userTwo.find((i) => i == box9.position) &&
    true;

  const SixFiveFour: wincombination =
    userTwo.find((i) => i == box4.position) &&
    userTwo.find((i) => i == box5.position) &&
    userTwo.find((i) => i == box6.position) &&
    true;

  const SevenFiveThree: wincombination =
    userTwo.find((i) => i == box3.position) &&
    userTwo.find((i) => i == box5.position) &&
    userTwo.find((i) => i == box7.position) &&
    true;
  const EightFiveTwo: wincombination =
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

  return (
    <>
      <div className="text-red-500">{`userOne: ${userOne} userTwo: ${userTwo}`}</div>
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

          {userOne.length < 4 || userTwo.length < 4 ? (
            <h1 className=" bg-slate-500 absolute w-full">{winner}</h1>
          ) : (
            ""
          )}
          {<div className="absolute">{winner}</div>}
        </div>
      )}

      <Overlay oneTwoThree={oneTwoThree} ThreeTwoOne={ThreeTwoOne} />
      {/* <div>multiplayer</div>
      <div>CPU</div> */}
    </>
  );
}
