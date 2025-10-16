import { SocketContextProvider } from "./context";
import { Game } from "./Game";

function App() {
  return (
    <>
      <SocketContextProvider>
        <Game />
      </SocketContextProvider>
    </>
  );
}

export default App;
