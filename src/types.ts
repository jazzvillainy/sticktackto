export interface box {
  position: number[];
  mark: string;
}

export interface BoxProps {
  box: box;
  setBox: React.Dispatch<React.SetStateAction<box>>;
  boxSetters?: [];
  userOne: number[][];
  setUserOne: React.Dispatch<React.SetStateAction<number[][]>>;
  userTwo: number[][];
  setUserTwo: React.Dispatch<React.SetStateAction<number[][]>>;
}

export type wincombination = boolean | undefined;
