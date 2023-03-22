import { createContext } from "react";
import AppRouter from "./components/appRouter/appRouter";
import { app, database, storage } from "./firebase/firebaseConfig";
import { getAuth } from "firebase/auth";

export const Context = createContext(null);
const auth = getAuth(app);

function App() {
  return (
    <>
      <Context.Provider value={{ app, auth, database, storage }}>
        <AppRouter />
      </Context.Provider>
    </>
  );
}

export default App;
