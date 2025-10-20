export interface box {
  position: boxPosition
  mark: string;
}

export interface BoxProps {
  box: box;
  setBox: React.Dispatch<React.SetStateAction<box>>;
  boxSetters?: [];
  userOne: boxPosition[];
  setUserOne: React.Dispatch<React.SetStateAction<boxPosition[]>>;
  userTwo: boxPosition[];
  setUserTwo: React.Dispatch<React.SetStateAction<boxPosition[]>>;
  // socket: WebSocket
}

export type boxPosition = number[] | string;

export type wincombination = true | "" | undefined;
