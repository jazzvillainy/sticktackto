import { useState } from "react";
import { SocketContextProvider } from "./context";
import { Game } from "./Game";
import ConnectModal from "./ConnectModal";

function InnerApp() {
  // const socketCtx = useContext(SocketContext);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="absolute top-4 left-4 z-40">
        <button className="btn-accent" onClick={() => setOpen(true)}>
          Connect
        </button>
      </div>

      <Game />

      <ConnectModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function App() {
  return (
    <SocketContextProvider>
      <InnerApp />
    </SocketContextProvider>
  );
}

export default App;
