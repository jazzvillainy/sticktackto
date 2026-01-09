import { useContext, useState } from "react";
import Box from "./Box";
import Overlay from "./Overlay";
import { box, boxPosition, wincombination } from "./types";
import { SocketContext } from "./context";

export function Game() {
  const [userOne, setUserOne] = useState<boxPosition[]>([]);
  const [userTwo, setUserTwo] = useState<boxPosition[]>([]);
  const [disableButtons, setDisableButtons] = useState(false);

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

  SocketInstance?.socket?.addEventListener(
    "message",
    (x: MessageEvent<data>) => {
      setDisableButtons(false);
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
    }
  );

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
      {(userOne.length > 4 && winner == "") ||
      (userTwo.length > 4 && winner == "") ? (
        <div>game over</div>
      ) : (
        <div
          id="boxer"
          className="min-h-screen flex items-center justify-center bg-[#020617] p-6"
        >
          <div className="neon-board w-[min(92vmin,640px)] aspect-square grid grid-cols-3 gap-3 p-3 relative">
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
                  disableButtons={disableButtons}
                  setDisableButtons={setDisableButtons}
                />
              );
            })}

            {/* compute winning positions for overlay (endpoints are first and last cell of the winning triple) */}
            {(() => {
              let winningPositions = null as boxPosition[] | null;
              if (oneTwoThree)
                winningPositions = [
                  box1.position,
                  box2.position,
                  box3.position,
                ];
              else if (oneFourSeven)
                winningPositions = [
                  box1.position,
                  box4.position,
                  box7.position,
                ];
              else if (oneFiveNine)
                winningPositions = [
                  box1.position,
                  box5.position,
                  box9.position,
                ];
              else if (sevenEightNine)
                winningPositions = [
                  box7.position,
                  box8.position,
                  box9.position,
                ];
              else if (threeSixNine)
                winningPositions = [
                  box3.position,
                  box6.position,
                  box9.position,
                ];
              else if (fourFiveSix)
                winningPositions = [
                  box4.position,
                  box5.position,
                  box6.position,
                ];
              else if (threeFiveSeven)
                winningPositions = [
                  box3.position,
                  box5.position,
                  box7.position,
                ];
              else if (twoFiveEight)
                winningPositions = [
                  box2.position,
                  box5.position,
                  box8.position,
                ];
              else if (ThreeTwoOne)
                winningPositions = [
                  box1.position,
                  box2.position,
                  box3.position,
                ];
              else if (SevenFourOne)
                winningPositions = [
                  box1.position,
                  box4.position,
                  box7.position,
                ];
              else if (NineFiveOne)
                winningPositions = [
                  box1.position,
                  box5.position,
                  box9.position,
                ];
              else if (NineEightSeven)
                winningPositions = [
                  box7.position,
                  box8.position,
                  box9.position,
                ];
              else if (NineSixThree)
                winningPositions = [
                  box3.position,
                  box6.position,
                  box9.position,
                ];
              else if (SixFiveFour)
                winningPositions = [
                  box4.position,
                  box5.position,
                  box6.position,
                ];
              else if (SevenFiveThree)
                winningPositions = [
                  box3.position,
                  box5.position,
                  box7.position,
                ];
              else if (EightFiveTwo)
                winningPositions = [
                  box2.position,
                  box5.position,
                  box8.position,
                ];

              return <Overlay winningPositions={winningPositions} />;
            })()}

            {userOne.length < 4 || userTwo.length < 4
              ? winner && (
                  <div
                    id="tryAgain"
                    className="absolute top-3 left-1/2 -translate-x-1/2  h-full w-full text-sm text-accent rounded px-3 py-1"
                    style={{ border: "1px solid var(--panel-border)" }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="text-sm text-accent mb-2">
                        Game finished
                      </div>
                      <button
                        className="btn-accent"
                        onClick={() => {
                          // reset board
                          setBox1({ position: [1, 1], mark: "" });
                          setBox2({ position: [1, 2], mark: "" });
                          setBox3({ position: [1, 3], mark: "" });
                          setBox4({ position: [2, 1], mark: "" });
                          setBox5({ position: [2, 2], mark: "" });
                          setBox6({ position: [2, 3], mark: "" });
                          setBox7({ position: [3, 1], mark: "" });
                          setBox8({ position: [3, 2], mark: "" });
                          setBox9({ position: [3, 3], mark: "" });
                          setUserOne([]);
                          setUserTwo([]);
                        }}
                      >
                        Try Again
                      </button>
                    </div>
                    {/* <h1>{winner}</h1> */}
                  </div>
                )
              : ""}
          </div>
        </div>
      )}
    </>
  );
}
