import { useContext } from "react";
import classes from "./App.module.css";
import logonContext from "./Context/logon-context";

import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";

function App() {
  const ctx = useContext(logonContext);

  return (
    <div className={classes.App}>
      {!ctx.isLoggedIn && <Login />}

      <main>{ctx.isLoggedIn && <Home />}</main>
    </div>
  );
}

export default App;
