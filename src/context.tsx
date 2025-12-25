import React, { createContext, useCallback, useState } from "react";

type SocketContextShape = {
  socket: WebSocket | null;
  connect: (url: string) => void;
  close: () => void;
};

export const SocketContext = createContext<SocketContextShape | null>(null);

export const SocketContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  const connect = useCallback(
    (url: string) => {
      try {
        if (socket) {
          socket.close();
        }
      } catch (e) {
        console.warn("error closing previous socket", e);
      }

      const ws = new WebSocket(url);
      ws.addEventListener("open", () => {
        console.log("connected to", url);
      });
      ws.addEventListener("error", (e) => {
        console.error("socket error", e);
      });
      setSocket(ws);
    },
    [socket]
  );

  const close = useCallback(() => {
    if (socket) {
      socket.close();
      setSocket(null);
    }
  }, [socket]);

  return (
    <SocketContext.Provider value={{ socket, connect, close }}>
      {children}
    </SocketContext.Provider>
  );
};
