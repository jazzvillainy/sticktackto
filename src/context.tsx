import { createContext } from "react";

export const SocketContext = createContext<WebSocket | null>(null);
const socket = new WebSocket("ws://10.219.37.21:4001");
socket.addEventListener("open", () => {
  console.log("we have established connection with the server");

  // socket.send(JSON.stringify([userOne, userTwo]));
});

export const SocketContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
