import { useState } from "react";
import Box from "./Box";

interface box {
  position: number[];
  mark: string;
}

// type reactType = React.Dispatch<React.SetStateAction<box>>;

function App() {
  // const [array, setArray] = useState<object[]>([]);
  const [userOne, setUserOne] = useState<object[]>([]);
  const [userTwo, setUserTwo] = useState<object[]>([]);

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

  return (
    <>
      {userOne.length > 4 || userTwo.length > 4 ? (
        <div>game over</div>
      ) : (
        <div
          style={{
            background: "pink",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "100px",
            fontSize: "50px",
          }}
        >
          {boxSetters.map(([box, setBox], index: number) => {
            // const currentBox = box as box;
            // const currentSetBox = setBox as React.Dispatch<React.SetStateAction<box>>;
            return (
              <Box
                key={index}
                box={box}
                setBox={setBox}
                // boxSetters={boxSetters}
                userOne={userOne}
                userTwo={userTwo}
                setUserOne={setUserOne}
                setUserTwo={setUserTwo}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default App;
// </div>
