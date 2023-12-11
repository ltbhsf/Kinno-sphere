import { useContext } from "react";
import classes from "./App.module.css";
import logonContext from "./Context/logon-context";

import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";

import dummyPorfile from "./assets/dumy/dummy-profile.png";

const DUMMY_USERS = [
  {
    id: "u0",
    email: "leslie@gmail.com",
    password: "01234!",
    userName: "leslie",
    balance: 0,
    profileImage: none,
  },
  {
    id: "u1",
    email: "monami@nate.com",
    password: "r889238u",
    userName: "monami",
    balance: 10000,
    profileImage: dummyPorfile,
  },
  {
    id: "u2",
    email: "kevin@gmail.com",
    password: "87294nnn",
    userName: "alexa",
    balance: 4872,
    profileImage: none,
  },
  {
    id: "u3",
    email: "lazy@gmail.com",
    password: "999fklk",
    userName: "lazy-dog",
    balance: 30,
    profileImage: none,
  },
];

const DUMMY_PROJECTS = [
  {
    id: "p0",
    from: DUMMY_TEAMS[0],
    by: DUMMY_USERS[0],
    title: "project no.1",
    content: "it is a dummy project No.1 wooooow",
    type: "event",
    duration_start: Date(2023, 3, 4),
    duration_end: Date(2024, 1, 1),
    state: true,
  },
  {
    id: "p1",
    from: DUMMY_TEAMS[1],
    by: DUMMY_USERS[2],
    title: "project by leslieeeeee",
    content: "it is a dummy project No.1 wooooow",
    type: "event",
    duration_start: Date(2023, 3, 4),
    duration_end: Date(2024, 1, 1),
    state: true,
  },
];

const DUMMY_TEAMS = [
  {
    id: "t0",
    projects: [DUMMY_PROJECTS[0]],
    participants: [DUMMY_USERS[0], DUMMY_USERS[1]],
  },
  {
    id: "t1",
    projects: [DUMMY_PROJECTS[1]],
    participants: [DUMMY_USERS[2], DUMMY_USERS[3]],
  },
];




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
